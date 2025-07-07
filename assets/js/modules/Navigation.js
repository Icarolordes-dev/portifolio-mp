const createNavigation = (currentPage) => {
    const navHTML = `
        <a href="index.html" class="logo">Ícaro Lordes</a>
        <button class="nav-toggle" aria-label="Abrir menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <div class="nav-links">
            <a href="index.html" class="${currentPage === 'index' ? 'active' : ''}">Home</a>
            <a href="sobre.html" class="${currentPage === 'sobre' ? 'active' : ''}">Sobre & Serviços</a>
            <a href="projetos.html" class="${currentPage === 'projetos' ? 'active' : ''}">Projetos</a>
            <a href="contato.html" class="${currentPage === 'contato' ? 'active' : ''}">Contato</a>
        </div>
    `;
    return navHTML;
};

const initNavigation = () => {
    const navElement = document.querySelector('.main-nav');
    if (!navElement) return;

    const path = window.location.pathname.split("/").pop();
    let currentPage = 'index';
    if (path.includes('sobre')) currentPage = 'sobre';
    if (path.includes('projetos')) currentPage = 'projetos';
    if (path.includes('contato')) currentPage = 'contato';

    navElement.innerHTML = createNavigation(currentPage);

    const navToggle = navElement.querySelector('.nav-toggle');
    const navLinks = navElement.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Efeito de scroll no header
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

export { initNavigation };