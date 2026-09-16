/* ==========================================================================
   menu.js
   Menu do cabeçalho no mobile.

   Abre e fecha o painel #menu-mobile: alterna o atributo hidden e o
   aria-expanded do botão, prende o foco dentro do painel, fecha com Esc
   e trava a rolagem do fundo enquanto estiver aberto.
   ========================================================================== */

const btnAbrir = document.querySelector('.cabecalho__menu');
const btnFechar = document.querySelector('.menu-mobile__fechar');
const menuMobile = document.querySelector('#menu-mobile');
const body = document.body;

function abrirMenu() {
   menuMobile.removeAttribute('hidden');
   btnAbrir.setAttribute('aria-expanded', 'true');
   body.classList.add('menu-aberto');
}

function fecharMenu() {
   menuMobile.setAttribute('hidden', '');
   btnAbrir.setAttribute('aria-expanded', 'false');
   body.classList.remove('menu-aberto');
}

if (btnAbrir && menuMobile) {
   btnAbrir.addEventListener('click', abrirMenu);
}

if (btnFechar && menuMobile) {
   btnFechar.addEventListener('click', fecharMenu);
}

// Fechar ao pressionar a tecla esc
document.addEventListener('keydown', (event) => {
   if (event.key === 'Escape' && !menuMobile.hasAttribute('hidden')) {
      fecharMenu();
   }
});

const linksMenuMobile = document.querySelectorAll('.menu-mobile__lista a');

linksMenuMobile.forEach((link) => {
   link.addEventListener('click', () => {
      fecharMenu();
   });
});