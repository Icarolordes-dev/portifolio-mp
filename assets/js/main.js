// Orquestrador geral da aplicação JavaScript

// Futuramente, importaremos os módulos aqui
import { initNavigation } from './modules/Navigation.js';
import { initProjectFilter } from './modules/ProjectFilter.js';
import { initModal } from './modules/Modal.js';
import { initFormValidator } from './modules/FormValidator.js';
import { initAnimations } from './modules/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM totalmente carregado e analisado. O JavaScript está pronto para ser executado.');

  initNavigation();
  initProjectFilter();
  initModal();
  initFormValidator();
  initAnimations();
  // initAnimations();
  
  // const contactForm = document.querySelector('#contact-form');
  // if (contactForm) {
  //   new FormValidator(contactForm);
  // }
});