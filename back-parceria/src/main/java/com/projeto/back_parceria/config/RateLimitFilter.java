package com.projeto.back_parceria.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class RateLimitFilter extends OncePerRequestFilter {

    private final Map<String, RequestInfo> ipCache = new ConcurrentHashMap<>();
    private static final int MAX_REQUESTS = 5; // Limite de 5 requisições
    private static final Duration TIME_WINDOW = Duration.ofMinutes(1); // por minuto

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        
        // Aplica o limite apenas na rota do formulário
        if (request.getRequestURI().startsWith("/parceria") && "POST".equalsIgnoreCase(request.getMethod())) {
            String clientIp = getClientIp(request);
            Instant now = Instant.now();

            ipCache.compute(clientIp, (ip, info) -> {
                if (info == null || Duration.between(info.startTime, now).compareTo(TIME_WINDOW) > 0) {
                    return new RequestInfo(now, 1);
                }
                info.count++;
                return info;
            });

            if (ipCache.get(clientIp).count > MAX_REQUESTS) {
                response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                response.getWriter().write("Muitas requisicoes. Tente novamente mais tarde.");
                return;
            }
        }

        filterChain.doFilter(request, response);
    }

    private String getClientIp(HttpServletRequest request) {
        String xfHeader = request.getHeader("X-Forwarded-For");
        if (xfHeader == null) {
            return request.getRemoteAddr();
        }
        return xfHeader.split(",")[0];
    }

    private static class RequestInfo {
        Instant startTime;
        int count;

        RequestInfo(Instant startTime, int count) {
            this.startTime = startTime;
            this.count = count;
        }
    }
}