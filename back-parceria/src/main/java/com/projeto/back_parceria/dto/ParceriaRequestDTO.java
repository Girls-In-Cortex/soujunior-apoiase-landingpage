package com.projeto.back_parceria.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import java.util.List;

public class ParceriaRequestDTO {

    @NotBlank(message = "O nome é obrigatório.")
    private String nome;

    @NotBlank(message = "O e-mail é obrigatório.")
    @Email(message = "Formato de e-mail inválido.")
    private String email;

    @NotEmpty(message = "Selecione pelo menos um interesse.")
    private List<String> interesse;

    private String empresa;   // Opcional
    private String mensagem;  // Opcional

    // Método para validar se os interesses enviados estão na lista permitida
    public void validarInteressesPermitidos() {
        if (interesse != null) {
            List<String> permitidos = List.of("patrocinio", "infraestrutura", "mentoria", "contratar", "outra");
            for (String item : interesse) {
                if (!permitidos.contains(item)) {
                    throw new IllegalArgumentException("Interesse inválido selecionado: " + item);
                }
            }
        }
    }

    // Getters e Setters
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public List<String> getInteresse() { return interesse; }
    public void setInteresse(List<String> interesse) { this.interesse = interesse; }

    public String getEmpresa() { return empresa; }
    public void setEmpresa(String empresa) { this.empresa = empresa; }

    public String getMensagem() { return mensagem; }
    public void setMensagem(String mensagem) { this.mensagem = mensagem; }
}