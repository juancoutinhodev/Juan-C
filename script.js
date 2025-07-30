document.addEventListener('DOMContentLoaded', function() {
    // Efeito de digitação
    new Typed('.typing', {
        strings: ['Olá, eu sou o [Seu Nome].', 'Bem-vindo ao meu portfólio.'],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });

    // Alternador de tema
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica a preferência do usuário no carregamento da página
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        }
    });
});