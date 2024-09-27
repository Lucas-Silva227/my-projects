// Adicione funcionalidades como rolagem suave ou animações ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});