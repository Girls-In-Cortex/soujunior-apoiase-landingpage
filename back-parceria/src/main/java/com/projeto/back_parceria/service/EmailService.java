package com.projeto.back_parceria.service;

import com.google.api.client.googleapis.auth.oauth2.GoogleRefreshTokenRequest;
import com.google.api.client.googleapis.auth.oauth2.GoogleTokenResponse;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.google.api.services.gmail.Gmail;
import com.google.api.services.gmail.model.Message;
import com.projeto.back_parceria.dto.ParceriaRequestDTO;
import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import jakarta.mail.Session;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import java.io.ByteArrayOutputStream;
import java.util.Properties;

@Service
public class EmailService {

    @Value("${gmail.client.id:${GMAIL_CLIENT_ID:seu_client_id}}")
    private String clientId;

    @Value("${gmail.client.secret:${GMAIL_CLIENT_SECRET:seu_client_secret}}")
    private String clientSecret;

    @Value("${gmail.refresh.token:${GMAIL_REFRESH_TOKEN:seu_refresh_token}}")
    private String refreshToken;

    @Value("${spring.mail.username:soujunior.parcerias@gmail.com}")
    private String remetenteEmail;

    @Value("${app.email.destino:soujunior.parcerias@gmail.com}")
    private String emailDestino;

    public void processarEnviarParceria(ParceriaRequestDTO dto) {
        dto.validarInteressesPermitidos();

        String nomeSanitizado = sanitizar(dto.getNome());
        String empresaSanitizada = sanitizar(dto.getEmpresa());
        String mensagemSanitizada = sanitizar(dto.getMensagem());
        String interessesFormatados = dto.getInteresse() != null ? String.join(", ", dto.getInteresse()) : "";

        try {
            // 1. Obter Access Token temporário via HTTP OAuth2
            GoogleTokenResponse tokenResponse = new GoogleRefreshTokenRequest(
                    new NetHttpTransport(),
                    new GsonFactory(),
                    refreshToken,
                    clientId,
                    clientSecret
            ).execute();

            String accessToken = tokenResponse.getAccessToken();

            // 2. Instanciar o cliente HTTP da Gmail API
            Gmail service = new Gmail.Builder(
                    new NetHttpTransport(),
                    new GsonFactory(),
                    request -> request.getHeaders().setAuthorization("Bearer " + accessToken)
            ).setApplicationName("SouJunior-Parcerias").build();

            // 3. Montar o e-mail em formato Mime
            Properties props = new Properties();
            Session session = Session.getDefaultInstance(props, null);
            MimeMessage email = new MimeMessage(session);

            email.setFrom(new InternetAddress(remetenteEmail));
            email.addRecipient(jakarta.mail.Message.RecipientType.TO, new InternetAddress(emailDestino));
            email.setSubject("Nova Proposta de Parceria: " + nomeSanitizado);

            String textoCorpo = "Nome: " + nomeSanitizado + "\n" +
                               "E-mail: " + dto.getEmail() + "\n" +
                               "Empresa: " + (empresaSanitizada != null ? empresaSanitizada : "Não informada") + "\n" +
                               "Interesses: " + interessesFormatados + "\n\n" +
                               "Mensagem:\n" + (mensagemSanitizada != null ? mensagemSanitizada : "Nenhuma mensagem enviada");

            email.setText(textoCorpo);

            // 4. Converter e codificar a mensagem para o padrão Base64URL
            ByteArrayOutputStream buffer = new ByteArrayOutputStream();
            email.writeTo(buffer);
            byte[] rawMessageBytes = buffer.toByteArray();
            String encodedEmail = Base64.encodeBase64URLSafeString(rawMessageBytes);

            Message message = new Message();
            message.setRaw(encodedEmail);

            // 5. Enviar requisição HTTP REST na porta 443
            service.users().messages().send("me", message).execute();

            System.out.println("E-mail enviado com sucesso via Gmail API para: " + nomeSanitizado);

        } catch (Exception e) {
            System.out.println("Aviso no envio de e-mail via Gmail API: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private String sanitizar(String texto) {
        if (texto == null) return null;
        return texto.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    }
}