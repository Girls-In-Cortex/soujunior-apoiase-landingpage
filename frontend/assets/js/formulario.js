/* ==========================================================================
   formulario.js
   Envio do formulário da seção #parceria.

   Valida os campos, envia para POST /parceria e escreve o retorno em
   .parceria__retorno, que já tem aria-live. No erro, marca o campo e
   mostra a mensagem em texto, nunca só pela cor da borda.
   ========================================================================== */

// TROCAR quando o deploy do back estiver definido.
const URL_PARCERIA = 'https://soujunior-backend.onrender.com/parceria';

// valores aceitos em interesse
const INTERESSES_VALIDOS = ['patrocinio', 'infraestrutura', 'mentoria', 'contratar', 'outra'];

const form = document.querySelector('.parceria__form');
const retorno = document.querySelector('.parceria__retorno');
const botaoEnviar = form.querySelector('button[type="submit"]');
const grupoInteresse = form.querySelector('.campo--grupo');

// só nome e email têm validador de texto. empresa e mensagem são opcionais,
// se estiverem vazios não é erro.
const validadores = {
  nome: (valor) => (valor.trim().length > 0 ? '' : 'Diga como podemos te chamar.'),
  email: (valor) => {
    if (valor.trim().length === 0) return 'E-mail é obrigatório.';
    const pareceEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    return pareceEmail ? '' : 'Digite um e-mail válido.';
  },
};

// erro em campo normal: borda muda de cor E aparece texto, nunca só cor.
// precisa existir um <p class="campo__erro" id="erro-NOME"> perto do campo.
function mostrarErro(campo, mensagem) {
  const erroEl = document.getElementById(`erro-${campo.name}`);
  campo.classList.add('campo--invalido');
  campo.setAttribute('aria-invalid', 'true');
  if (erroEl) {
    erroEl.textContent = mensagem;
    erroEl.hidden = false;
  }
}

function limparErro(campo) {
  const erroEl = document.getElementById(`erro-${campo.name}`);
  campo.classList.remove('campo--invalido');
  campo.removeAttribute('aria-invalid');
  if (erroEl) {
    erroEl.textContent = '';
    erroEl.hidden = true;
  }
}

function validarCampo(campo) {
  const validar = validadores[campo.name];
  if (!validar) return true; // campo opcional, sem validador

  const mensagemErro = validar(campo.value);
  if (mensagemErro) {
    mostrarErro(campo, mensagemErro);
    return false;
  }
  limparErro(campo);
  return true;
}

// grupo de checkbox: erro fica no fieldset inteiro, não em cada caixa
function validarInteresse() {
  const marcados = [...form.querySelectorAll('input[name="interesse"]:checked')];
  const erroEl = document.getElementById('erro-interesse');

  if (marcados.length === 0) {
    grupoInteresse.classList.add('campo--invalido');
    if (erroEl) {
      erroEl.textContent = 'Marque pelo menos uma opção.';
      erroEl.hidden = false;
    }
    return false;
  }

  grupoInteresse.classList.remove('campo--invalido');
  if (erroEl) {
    erroEl.textContent = '';
    erroEl.hidden = true;
  }
  return true;
}

// valida ao sair do campo, não a cada tecla
form.querySelectorAll('input[name="nome"], input[name="email"]').forEach((campo) => {
  campo.addEventListener('blur', () => validarCampo(campo));
});

form.querySelectorAll('input[name="interesse"]').forEach((caixa) => {
  caixa.addEventListener('change', validarInteresse);
});

form.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const camposTexto = [...form.querySelectorAll('input[name="nome"], input[name="email"]')];
  const textoValido = camposTexto.map(validarCampo).every(Boolean);
  const interesseValido = validarInteresse();

  if (!textoValido || !interesseValido) {
    const primeiroInvalido = camposTexto.find((c) => c.classList.contains('campo--invalido'));
    (primeiroInvalido || form.querySelector('input[name="interesse"]'))?.focus();
    return;
  }

  // filtra qualquer valor fora da lista aceita, defesa extra além do back
  const interessesMarcados = [...form.querySelectorAll('input[name="interesse"]:checked')]
    .map((c) => c.value)
    .filter((valor) => INTERESSES_VALIDOS.includes(valor));

  const dados = {
    nome: form.nome.value.trim(),
    empresa: form.empresa.value.trim(),
    email: form.email.value.trim(),
    mensagem: form.mensagem.value.trim(),
    interesse: interessesMarcados,
  };

  botaoEnviar.disabled = true;
  botaoEnviar.textContent = 'Enviando...';
  retorno.textContent = '';

  try {
    const resposta = await fetch(URL_PARCERIA, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });

    const corpo = await resposta.json();

    if (resposta.ok && corpo.ok) {
      retorno.textContent = 'Proposta enviada! A organização entra em contato pelo e-mail informado.';
      form.reset();
    } else if (resposta.status === 429) {
      retorno.textContent = 'Muitas tentativas seguidas. Espere um pouco e tente de novo.';
    } else {
      retorno.textContent = corpo.erro || 'Não foi possível enviar. Confira os dados e tente de novo.';
    }
  } catch (erro) {
    console.warn('Falha ao enviar proposta de parceria', erro);
    retorno.textContent =
      'Não conseguimos enviar agora. Tente novamente em instantes ou fale conosco pelo WhatsApp.';
  } finally {
    botaoEnviar.disabled = false;
    botaoEnviar.textContent = 'Enviar proposta';
  }
});