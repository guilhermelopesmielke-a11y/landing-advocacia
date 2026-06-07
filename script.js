/**
 * Função 1: Gere o envio do formulário de contacto
 * Evita o recarregamento da página, simula o envio e limpa os campos.
 */
function handleFormSubmit(event) {
  // Evita o comportamento padrão do HTML de recarregar a página
  event.preventDefault(); 
  
  // Exibe a mensagem de sucesso ao utilizador
  alert("Obrigado pelo seu contacto! A sua mensagem foi enviada com sucesso e responderemos o mais breve possível.");
  
  // Limpa todos os campos do formulário após o envio
  event.target.reset();
}

/**
 * Função 2: Ativa a rolagem suave (Smooth Scroll)
 * Faz com que a página deslize suavemente até à secção correta ao clicar nos links.
 */
function enableSmoothScroll() {
  // Seleciona os links de navegação e o botão do Hero
  const links = document.querySelectorAll('.nav-link, .scroll-btn');

  links.forEach(link => {
    link.addEventListener('click', function(event) {
      // Verifica se o link aponta para uma âncora interna (contém '#')
      if (this.hash !== "") {
        event.preventDefault(); // Impede o salto abrupto padrão
        
        const targetElement = document.querySelector(this.hash);
        
        if (targetElement) {
          // Desloca suavemente, compensando a altura da navbar fixa (aprox. 60px)
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Garante que o JavaScript só é executado após todo o HTML estar carregado
document.addEventListener("DOMContentLoaded", () => {
  // Ativa o evento de submissão no formulário de contacto
  const form = document.getElementById('formContato');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Ativa a função de scroll suave
  enableSmoothScroll();
});