/* ==========================================================================
   contador.js
   Contagem animada de um número que já está escrito no HTML.

   Usado em dois lugares: os quatro números do #impacto e o 4 do título do
   hero. A lógica nasceu no impacto.js e foi extraída para cá quando o hero
   passou a precisar dela, em vez de duplicar.

   O valor final sempre vem do próprio texto do elemento. Nada é buscado e
   nada é inventado: se o JavaScript não rodar, o número já está na página e
   nada se perde.

   Prefixo e sufixo são remontados a cada passo. Sem isso o "+50" de Pessoas
   empregadas perderia o "+" durante a contagem e ele só voltaria no fim.

   Quem pediu menos movimento não vê contagem nenhuma: o texto original fica
   como está.
   ========================================================================== */

/* A duração mora no --duracao-contagem do tokens.css, não aqui. O marca-texto
   do hero usa o mesmo token como atraso para entrar só quando a contagem
   acaba: se o número estivesse cravado neste arquivo, mudar um esqueceria o
   outro e a faixa entraria fora de hora. */
function lerDuracaoMs() {
  const bruto = getComputedStyle(document.documentElement)
    .getPropertyValue('--duracao-contagem')
    .trim();

  if (bruto.endsWith('ms')) return parseFloat(bruto);
  if (bruto.endsWith('s')) return parseFloat(bruto) * 1000;
  return 1200;
}

const DURACAO_MS = lerDuracaoMs();

export const prefereMenosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// separa prefixo/número/sufixo (ex: "+50" -> prefixo "+", numero 50)
export function analisarValor(texto) {
  const match = texto.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return null;
  const [, prefixo, numero, sufixo] = match;
  return { prefixo, valorFinal: parseInt(numero, 10), sufixo };
}

export function animarContador(elemento) {
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
