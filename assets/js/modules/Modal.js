class Modal {
    constructor(modalId) {
        this.modal = document.getElementById(modalId);
        if (!this.modal) {
            console.error(`Modal with id ${modalId} not found.`);
            return;
        }
        this.modal.setAttribute('aria-hidden', 'true');
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal || e.target.classList.contains('close-modal')) {
                this.close();
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.getAttribute('aria-hidden') === 'false') {
                this.close();
            }
        });
    }

    open(data) {
        if (!this.modal) return;
        this.modal.innerHTML = this.createModalContent(data);
        this.modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    close() {
        if (!this.modal) return;
        this.modal.setAttribute('aria-hidden', 'true');
        this.modal.innerHTML = '';
        document.body.style.overflow = '';
    }

    createModalContent(data) {
        return `
            <div class="modal-dialog">
                <button class="close-modal" aria-label="Fechar modal">&times;</button>
                <h2>${data.title}</h2>
                <img src="${data.image}" alt="Imagem do projeto ${data.title}">
                <p>${data.description}</p>
                <h4>Desafios</h4>
                <p>${data.challenges}</p>
                <h4>Soluções</h4>
                <p>${data.solutions}</p>
                <div class="modal-links">
                    <a href="${data.siteLink}" class="cta-button" target="_blank" rel="noopener">Ver Site</a>
                    <a href="${data.repoLink}" class="cta-button secondary" target="_blank" rel="noopener">Ver Código</a>
                </div>
            </div>
        `;
    }
}

const initModal = () => {
    const projectGrid = document.querySelector('.grid-projetos');
    if (!projectGrid) return;

    const modal = new Modal('project-modal');

    projectGrid.addEventListener('click', (e) => {
        const card = e.target.closest('.projeto-card');
        if (!card) return;

        // Dados de exemplo - em um projeto real, isso viria de um JSON ou do próprio HTML
        const projectData = {
            title: card.querySelector('h3').textContent,
            image: card.querySelector('img').src,
            description: card.querySelector('p').textContent,
            challenges: 'O principal desafio foi criar uma experiência de usuário fluida e intuitiva, garantindo ao mesmo tempo que o site fosse performático e acessível em todos os dispositivos.',
            solutions: 'Utilizamos uma abordagem mobile-first, com um design responsivo baseado em Flexbox e Grid Layout. A performance foi otimizada através da compressão de imagens e do carregamento assíncrono de scripts.',
            siteLink: '#',
            repoLink: '#'
        };

        modal.open(projectData);
    });
};

export { initModal };