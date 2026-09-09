document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-contato');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const assuntoInput = document.getElementById('assunto');
  const mensagemInput = document.getElementById('mensagem');

  const chatToggle = document.getElementById('chat-toggle');
  const chatWidget = document.getElementById('chat');
  const fecharChat = document.getElementById('fechar');
  const inputChat = document.getElementById('input');
  const enviarChat = document.getElementById('enviar');
  const chatBox = document.getElementById('chat-box');

  function adicionarMensagem(texto, origem = 'bot') {
    const balao = document.createElement('div');
    balao.className = origem === 'usuario' ? 'usuario' : 'bot';
    balao.textContent = texto;
    chatBox.appendChild(balao);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  function respostaBot(mensagem) {
    const texto = mensagem.toLowerCase();

    if (texto.includes('olá') || texto.includes('oi') || texto.includes('bom dia')) {
      return 'Olá! 😊 Como posso ajudar na clínica?';
    }

    if (texto.includes('serviço') || texto.includes('serviços')) {
      return 'Oferecemos consultas veterinárias, banho e tosa e pet shop com produtos para pets.';
    }

    if (texto.includes('agendar') || texto.includes('consulta') || texto.includes('atendimento')) {
      return 'Você pode preencher o formulário de contato na página e nossa equipe entrará em contato.';
    }

    if (texto.includes('preço') || texto.includes('valor')) {
      return 'Os valores variam conforme o serviço. Entre em contato para receber uma avaliação.';
    }

    return 'Obrigado pela mensagem! Nossa equipe vai responder em breve.';
  }

  function enviarMensagemChat() {
    const texto = inputChat.value.trim();

    if (!texto) {
      return;
    }

    adicionarMensagem(texto, 'usuario');
    inputChat.value = '';

    const resposta = respostaBot(texto);
    setTimeout(() => adicionarMensagem(resposta, 'bot'), 400);
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const nome = nomeInput.value.trim();
      const email = emailInput.value.trim();
      const assunto = assuntoInput.value.trim();
      const mensagem = mensagemInput.value.trim();

      if (!nome || !email || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
      }

      alert(`Olá, ${nome}! Sua mensagem foi enviada com sucesso. Nossa equipe entrará em contato.`);
      form.reset();
    });
  }

  if (chatToggle && chatWidget) {
    chatToggle.addEventListener('click', () => {
      chatWidget.classList.toggle('hidden');
    });
  }

  if (fecharChat && chatWidget) {
    fecharChat.addEventListener('click', () => {
      chatWidget.classList.add('hidden');
    });
  }

  if (enviarChat) {
    enviarChat.addEventListener('click', enviarMensagemChat);
  }

  if (inputChat) {
    inputChat.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        enviarMensagemChat();
      }
    });
  }
});
