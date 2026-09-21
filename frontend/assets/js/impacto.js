/* ==========================================================================
   impacto.js
   Contador dos números da seção #impacto.

   Os quatro valores vêm da organização e já estão escritos no HTML.
   Este arquivo não busca nada: anima a contagem até o valor final quando
   a seção entra na tela, uma vez só.

   A animação em si vive no contador.js, compartilhada com o número do
   título do hero. O tratamento do "+50" de Pessoas empregadas está lá:
   o prefixo é remontado a cada passo para o sinal não sumir na contagem.
   ========================================================================== */

import { animarContador } from './contador.js';

const secaoImpacto = document.querySelector('#impacto');

if (secaoImpacto) {
  const observador = new IntersectionObserver(
    (entradas, obs) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          secaoImpacto.querySelectorAll('.impacto__valor').forEach(animarContador);
          obs.disconnect();
        }
      });
    },
    { threshold: 0.4 }
  );

  observador.observe(secaoImpacto);
}
