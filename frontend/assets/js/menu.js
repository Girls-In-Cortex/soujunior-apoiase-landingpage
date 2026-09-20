/* ==========================================================================
   menu.js
   Menu do cabeçalho no mobile.

   Abre e fecha o painel #menu-mobile: alterna o atributo hidden e o
   aria-expanded do botão, prende o foco dentro do painel, fecha com Esc
   e trava a rolagem do fundo enquanto estiver aberto.
   ========================================================================== */

const btnMenu = document.querySelector('.cabecalho__menu');
const menuMobile = document.querySelector('#menu-mobile');
const body = document.body;

function abrirMenu() {
   menuMobile.removeAttribute('hidden');
   requestAnimationFrame(() => {
      menuMobile.classList.add('menu-mobile--aberto');
   });

   btnMenu.setAttribute('aria-expanded', 'true');
   body.classList.add('menu-aberto');
}

function fecharMenu() {
   menuMobile.classList.remove('menu-mobile--aberto');
   btnMenu.setAttribute('aria-expanded', 'false');
   body.classList.remove('menu-aberto');

   setTimeout(() => {
      menuMobile.setAttribute('hidden', '');
   }, 250);
}

function alternarMenu() {
   const estaAberto = body.classList.contains('menu-aberto');

   if (estaAberto) {
      fecharMenu();
   } else {
      abrirMenu();
   }
}

if (btnMenu && menuMobile) {
   btnMenu.addEventListener('click', alternarMenu);
}

// Fechar ao pressionar a tecla Esc
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