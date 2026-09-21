/* ==========================================================================
   animacoes.js
   Entrada das seções ao rolar.

   Cada seção sobe 8px e aparece uma vez só, quando entra na tela. O estado
   inicial invisível mora no CSS atrás de .js-ativo, e quem põe essa classe
   no <html> é o script inline do <head>, antes da primeira pintura: se ela
   fosse posta daqui, a página apareceria e sumiria na frente de quem lê.

   Sem JavaScript a classe nunca chega, nenhuma regra de entrada se aplica e
   a página é vista inteira. O conteúdo nunca fica preso invisível.

   O escalonamento dos itens de lista é todo em CSS, por :nth-child. Aqui só
   se marca a seção: nada de observer por item.
   ========================================================================== */

import { animarContador } from './contador.js';

const secoes = document.querySelectorAll('.secao');

// Uma seção entra uma vez só: marca a classe e dispara os contadores que
// estiverem dentro dela. Hoje só o 4 do título do hero, mas serve para
// qualquer .hero__contador que apareça depois.
function revelar(secao, observador) {
  if (secao.classList.contains('secao--visivel')) return;
  secao.classList.add('secao--visivel');
  secao.querySelectorAll('.hero__contador').forEach(animarContador);
  observador.unobserve(secao);
}

// Sem IntersectionObserver ninguém marcaria as seções e elas ficariam
// invisíveis para sempre. Nesse caso desliga a entrada e mostra tudo.
if (!('IntersectionObserver' in window)) {
  document.documentElement.classList.remove('js-ativo');
} else if (secoes.length) {
  const observador = new IntersectionObserver(
    (entradas, obs) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        revelar(entrada.target, obs);
      });
    },
    { threshold: 0.1 }
  );

  secoes.forEach((secao) => observador.observe(secao));

  // O Tab leva o foco para links de seções que ainda não entraram, e nem
  // sempre o navegador rola o suficiente para o observer disparar: o foco
  // ficava parado num link invisível. Revelar a seção no focusin cobre isso.
  document.addEventListener('focusin', (evento) => {
    const secao = evento.target.closest('.secao');
    if (secao) revelar(secao, observador);
  });
}
