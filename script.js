// Adiciona efeito de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona efeito de transparência no header ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
});

// FAQ Toggle
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Fecha todas as respostas
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Abre a resposta clicada se não estava ativa
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
}); 