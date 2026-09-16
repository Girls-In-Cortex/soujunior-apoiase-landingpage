/* ==========================================================================
   impacto.js
   Contador dos números da seção #impacto.

   Os quatro valores vêm da organização e já estão escritos no HTML.
   Este arquivo não busca nada: anima a contagem até o valor final quando
   a seção entra na tela, uma vez só.

   Atenção ao "+50" de Pessoas empregadas. Os outros três valores animam
   direto, mas esse tem prefixo: anime só o número e mantenha o sinal a
   cada passo, senão ele some durante a contagem e volta só no fim.
   ========================================================================== */

const prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const DURACAO_MS = 1200;

// separa prefixo/número/sufixo (ex: "+50" -> prefixo "+", numero 50)
function analisarValor(texto) {
  const match = texto.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return null;
  const [, prefixo, numero, sufixo] = match;
  return { prefixo, valorFinal: parseInt(numero, 10), sufixo };
}

function animarContador(elemento) {
  const dados = analisarValor(elemento.textContent.trim());
  if (!dados) return;
  if (prefereMenosMovimento) return;

  const { prefixo, valorFinal, sufixo } = dados;
  const inicio = performance.now();

  function passo(agora) {
    const progresso = Math.min((agora - inicio) / DURACAO_MS, 1);
    const valorAtual = Math.round(valorFinal * progresso);
    elemento.textContent = `${prefixo}${valorAtual}${sufixo}`;

    if (progresso < 1) {
      requestAnimationFrame(passo);
    } else {
      elemento.textContent = `${prefixo}${valorFinal}${sufixo}`; 
    }
  }

  requestAnimationFrame(passo);
}

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
