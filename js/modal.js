// ==================== MODAL WINDOW ====================

const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');

// Відкрити модальне вікно
if (modalOpenBtn) {
  modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // Блокуємо скрол
  });
}

// Закрити модальне вікно
if (modalCloseBtn) {
  modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('is-open');
    document.body.style.overflow = ''; // Повертаємо скрол
  });
}

// Закрити модальне вікно при кліку на backdrop
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  });
}

// Закрити модальне вікно при натисканні Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

// ==================== MOBILE MENU ====================

const mobileMenuOpenBtn = document.querySelector('[data-menu-open]');
const mobileMenuCloseBtn = document.querySelector('[data-menu-close]');
const mobileMenu = document.querySelector('[data-menu]');

// Відкрити мобільне меню
if (mobileMenuOpenBtn) {
  mobileMenuOpenBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-open');
    document.body.classList.add('no-scroll'); // Блокуємо скрол
  });
}

// Закрити мобільне меню
if (mobileMenuCloseBtn) {
  mobileMenuCloseBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll'); // Повертаємо скрол
  });
}

// Закрити мобільне меню при кліку на посилання
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  });
});

// Закрити меню при зміні розміру вікна (якщо перейшли на десктоп)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
});