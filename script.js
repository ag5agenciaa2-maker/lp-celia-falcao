// Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    nav.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Header Scroll Effect + Hero Parallax & Zoom
const header = document.getElementById('header');
const heroBg = document.querySelector('.hero-bg');
let lastScroll = 0;
let ticking = false;

function updateHeroEffects(scrollPos) {
  // Zoom suave: escala de 1.0 a 1.1 baseado no scroll
  const maxScroll = 800; // Scroll máximo para efeito completo
  const zoomProgress = Math.min(scrollPos / maxScroll, 1);
  const scale = 1 + (zoomProgress * 0.1); // 1.0 → 1.1

  // Parallax: movimento vertical suave
  const translateY = scrollPos * 0.5; // 50% da velocidade do scroll

  if (heroBg) {
    heroBg.style.transform = `scale(${scale}) translateY(${translateY}px)`;
  }
}

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Header effect
      if (currentScroll > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Hero effects
      updateHeroEffects(currentScroll);

      ticking = false;
    });

    ticking = true;
  }

  lastScroll = currentScroll;
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      const headerHeight = header.offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach(faq => faq.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
  revealObserver.observe(element);
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});

// Máscara de Telefone
function maskPhone(value) {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
}

const phoneInput = document.getElementById('cta-telefone');

phoneInput.addEventListener('input', (e) => {
  e.target.value = maskPhone(e.target.value);
});

// Formulário CTA
const ctaForm = document.getElementById('cta-form');

ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('cta-nome').value.trim();
  const telefone = document.getElementById('cta-telefone').value.trim();
  const email = document.getElementById('cta-email').value.trim();
  const servico = document.getElementById('cta-servico').value;
  const mensagem = document.getElementById('cta-mensagem').value.trim();

  if (!nome || !telefone || !email || !servico) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }

  const phoneDigits = telefone.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    alert('Por favor, insira um telefone válido.');
    return;
  }

  // Mapear valor do serviço para texto legível
  const servicosMap = {
    'habilitacao': 'Habilitação de Pensionistas',
    'revisao': 'Revisão de Benefícios',
    'cota-parte': 'Transferência de Cota-Parte',
    'precatorios': 'Precatórios Trabalhistas',
    'outro': 'Outro assunto'
  };

  let whatsappMessage = `Nome:\n${nome}\n\nTel:\n${telefone}\n\nEmail:\n${email}\n\nServiço:\n${servicosMap[servico]}`;

  if (mensagem) {
    whatsappMessage += `\n\nMsg:\n${mensagem}`;
  }

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappURL = `https://api.whatsapp.com/send?phone=5521999066640&text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');

  ctaForm.reset();
});
