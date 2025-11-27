(() => {
  // Модальне вікно
  const modalRefs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  if (modalRefs.openModalBtn && modalRefs.closeModalBtn && modalRefs.modal) {
    modalRefs.openModalBtn.addEventListener("click", toggleModal);
    modalRefs.closeModalBtn.addEventListener("click", toggleModal);
  }

  function toggleModal() {
    modalRefs.modal.classList.toggle("is-open");
  }

  // Мобільне меню
  const menuRefs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  if (menuRefs.openMenuBtn && menuRefs.closeMenuBtn && menuRefs.menu) {
    menuRefs.openMenuBtn.addEventListener("click", toggleMenu);
    menuRefs.closeMenuBtn.addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    menuRefs.menu.classList.toggle("is-open");
    document.body.classList.toggle("no-scroll");
  }

  // Закриття меню при кліку на посилання
  const menuLinks = document.querySelectorAll(".mobile-menu-link");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuRefs.menu.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    });
  });
})();