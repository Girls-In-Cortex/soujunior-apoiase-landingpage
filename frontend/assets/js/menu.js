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

/* O hidden entra só quando a transição de saída termina, avisada pelo
   transitionend. A folga cobre o caso de o evento não vir: transição
   interrompida, painel já em display: none no desktop, aba em segundo plano.
   É maior que a duração do CSS de propósito, porque é rede de segurança e
   não o relógio principal. */
const ESPERA_MAXIMA_MS = 400;
let esperaDeFechamento = null;

function cancelarEsperaDeFechamento() {
   if (!esperaDeFechamento) return;
   menuMobile.removeEventListener('transitionend', esperaDeFechamento.aoTerminar);
   clearTimeout(esperaDeFechamento.folga);
   esperaDeFechamento = null;
}

function abrirMenu() {
   // Mata qualquer fechamento em andamento: sem isso, abrir logo depois de
   // fechar deixava o hidden atrasado cair em cima do menu já aberto, e ele
   // sumia com aria-expanded="true", travado até o segundo toque.
   cancelarEsperaDeFechamento();

   menuMobile.removeAttribute('hidden');
   requestAnimationFrame(() => {
      menuMobile.classList.add('menu-mobile--aberto');
   });

   btnMenu.setAttribute('aria-expanded', 'true');
   body.classList.add('menu-aberto');
}

function fecharMenu() {
   cancelarEsperaDeFechamento();

   menuMobile.classList.remove('menu-mobile--aberto');
   btnMenu.setAttribute('aria-expanded', 'false');
   body.classList.remove('menu-aberto');

   const esconder = () => {
      // Segunda guarda: se alguém reabriu no meio do caminho, não esconde.
      if (!menuMobile.classList.contains('menu-mobile--aberto')) {
         menuMobile.setAttribute('hidden', '');
      }
      cancelarEsperaDeFechamento();
   };

   const aoTerminar = (evento) => {
      // Ignora transições que sobem dos filhos e as outras propriedades,
      // senão o hidden entraria na primeira das três que terminar.
      if (evento.target !== menuMobile || evento.propertyName !== 'opacity') return;
      esconder();
   };

   menuMobile.addEventListener('transitionend', aoTerminar);
   esperaDeFechamento = { aoTerminar, folga: setTimeout(esconder, ESPERA_MAXIMA_MS) };
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