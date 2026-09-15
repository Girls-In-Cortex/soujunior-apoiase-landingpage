package com.projeto.back_parceria.service;

import com.projeto.back_parceria.dto.ParceriaRequestDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired(required = false)
    private JavaMailSender mailSender;

    public void processarEnviarParceria(ParceriaRequestDTO dto) {
        // Valida se os valores de interesse enviados são permitidos pelo contrato
        dto.validarInteressesPermitidos();

        String nomeSanitizado = sanitizar(dto.getNome());
        String empresaSanitizada = sanitizar(dto.getEmpresa());
        String mensagemSanitizada = sanitizar(dto.getMensagem());
        String interessesFormatados = dto.getInteresse() != null ? String.join(", ", dto.getInteresse()) : "";

        try {
            if (mailSender != null) {
                SimpleMailMessage message = new SimpleMailMessage();
                message.setTo("destino@projeto.com");
                message.setSubject("Nova Proposta de Parceria: " + nomeSanitizado);
                message.setText("Nome: " + nomeSanitizado + "\n" +
                                "E-mail: " + dto.getEmail() + "\n" +
                                "Empresa: " + (empresaSanitizada != null ? empresaSanitizada : "Não informada") + "\n" +
                                "Interesses: " + interessesFormatados + "\n\n" +
                                "Mensagem:\n" + (mensagemSanitizada != null ? mensagemSanitizada : "Nenhuma mensagem enviada"));
                
                System.out.println("E-mail simulado com sucesso para: " + nomeSanitizado);
            }
        } catch (Exception e) {
            System.out.println("Aviso no envio de e-mail: " + e.getMessage());
        }
    }

    private String sanitizar(String texto) {
        if (texto == null) return null;
        return texto.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    }
}