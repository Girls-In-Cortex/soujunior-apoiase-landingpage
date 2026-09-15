package com.projeto.back_parceria.controller;

import com.projeto.back_parceria.dto.ParceriaRequestDTO;
import com.projeto.back_parceria.service.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/parceria")
// ATENÇÃO PARA PUBLICAÇÃO: Substituir "*" pelo endereço oficial do front-end para segurança de CORS
@CrossOrigin(origins = "*") 
public class ParceriaController {

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> enviarFormulario(@Valid @RequestBody ParceriaRequestDTO dto) {
        emailService.processarEnviarParceria(dto);
        // Contrato de sucesso exigido pelo front
        return ResponseEntity.ok(Map.of("ok", true));
    }

    // Tratamento de erros de validação (retorna 400 com o formato exato do contrato)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, Object>> handleValidationExceptions(MethodArgumentNotValidException ex) {
        String mensagemErro = ex.getBindingResult().getAllErrors().get(0).getDefaultMessage();
        return ResponseEntity.status(400).body(Map.of("ok", false, "erro", mensagemErro));
    }

    // Tratamento de erros gerais de regra de negócio
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<Map<String, Object>> handleRuntimeException(RuntimeException ex) {
        return ResponseEntity.status(400).body(Map.of("ok", false, "erro", ex.getMessage()));
    }
}