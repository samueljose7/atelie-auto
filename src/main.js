const menu = document.getElementById('nav-links');
const toggle = document.getElementById('menu-toggle');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const dialog = document.getElementById('contact-dialog');
const copy = document.getElementById('dialog-copy');
const sendWhatsappBtn = document.getElementById('send-whatsapp');
const copyMessageBtn = document.getElementById('copy-message');

const WHATSAPP_PHONE = '5511900000000';

function getWhatsappUrl(text) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

function showMessage(message) {
  if (!dialog || !copy) return;
  copy.textContent = message;
  if (copyMessageBtn) copyMessageBtn.textContent = 'Copiar mensagem';
  
  if (sendWhatsappBtn) {
    sendWhatsappBtn.onclick = () => {
      window.open(getWhatsappUrl(message), '_blank', 'noopener,noreferrer');
      dialog.close();
    };
  }

  // Tenta abrir o dialog
  try {
    dialog.showModal();
  } catch (err) {
    // Fallback caso showModal não seja suportado
    window.open(getWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  }
}

document.querySelectorAll('[data-contact]').forEach(b => {
  b.addEventListener('click', () => {
    const serviceName = b.dataset.service;
    const msg = serviceName
      ? `Olá! Gostaria de um orçamento e avaliação técnica para o serviço de ${serviceName}.`
      : 'Olá! Gostaria de solicitar um orçamento para o cuidado do meu veículo no Ateliê Auto.';
    showMessage(msg);
  });
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name') || '';
    const vehicle = data.get('vehicle') || '';
    const message = data.get('message') || '';
    const formatted = `Olá! Meu nome é ${name}. Meu carro é um ${vehicle}. ${message}`;
    showMessage(formatted);
  });
}

document.getElementById('close-dialog')?.addEventListener('click', () => dialog?.close());
document.getElementById('dialog-ok')?.addEventListener('click', () => dialog?.close());

if (copyMessageBtn) {
  copyMessageBtn.addEventListener('click', async () => {
    if (!copy?.textContent) return;
    try {
      await navigator.clipboard.writeText(copy.textContent);
      copyMessageBtn.textContent = 'Mensagem copiada ✓';
    } catch {
      copyMessageBtn.textContent = 'Erro ao copiar';
    }
  });
}

if (dialog) {
  dialog.addEventListener('click', e => {
    if (e.target === dialog) dialog.close();
  });
}
