const initProjectFilter = () => {
    const filterContainer = document.querySelector('.filtros');
    if (!filterContainer) return;

    const filterButtons = filterContainer.querySelectorAll('.filtro-btn');
    const projectCards = document.querySelectorAll('.projeto-card');

    filterContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (!target.matches('.filtro-btn')) return;

        // Atualiza o botão ativo
        filterButtons.forEach(btn => btn.classList.remove('active'));
        target.classList.add('active');

        const category = target.dataset.category;

        projectCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const shouldShow = category === 'todos' || cardCategory === category;
            
            card.style.display = shouldShow ? 'block' : 'none';
        });
    });
};

export { initProjectFilter };