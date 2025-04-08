document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  let isDarkMode = localStorage.getItem('dark-mode') === 'true'; // Verifica se o modo escuro está salvo no localStorage

  // Se o tema salvo for o modo escuro, aplica o modo escuro ao carregar a página
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    
  } else {
    document.body.classList.add('light-mode');
    
  }

  toggleButton.addEventListener('click', () => {
    // Alterna o estado do modo
    isDarkMode = !isDarkMode;

    // Alterna as classes no body para mudar o tema
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);



    // Salva a escolha do tema no localStorage
    localStorage.setItem('dark-mode', isDarkMode);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Espera 3 segundos antes de começar o fade-in
  setTimeout(function() {
    let content = document.getElementById("content");
    
    let opacity = 0;
    content.style.opacity = opacity;

    // Função para animar o fade-in
    function fadeIn() {
      if (opacity < 1) {
        opacity += 0.05; // Aumenta a opacidade
        content.style.opacity = opacity;
        requestAnimationFrame(fadeIn); // Chama a função novamente até alcançar opacidade 1
      }
    }

    fadeIn(); // Inicia a animação
  }, 3000); // 3000 milissegundos
});

//menu hamburguer
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("fullscreenMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname; // Pega o caminho da URL atual
  const menuItems = document.querySelectorAll('.fullscreen-menu a'); // Seleciona todos os links do menu
  
  menuItems.forEach(item => {
    const itemHref = item.getAttribute('href'); // Pega o href do item do menu
    // Verifica se o href corresponde à URL atual (levando em consideração o nome do arquivo)
    if (currentPath.includes(itemHref)) {
      item.classList.add('disabled'); // Adiciona a classe 'disabled' ao item correspondente
    } else {
      item.classList.remove('disabled'); // Garante que outros itens não tenham a classe 'disabled'
    }
  });
});



//
window.onload = function () {
    const frase = document.getElementById("frase");
    const footer = document.querySelector("footer");
  
    // Espera o fade-in terminar
    setTimeout(() => {
      // Calcula a posição vertical do footer
      const footerRect = footer.getBoundingClientRect();
      const fraseRect = frase.getBoundingClientRect();
  
      // Diferença de posição entre a frase e o centro do footer
      const deltaY = footerRect.top + (footerRect.height / 2) - (fraseRect.top + fraseRect.height / 2);
  
      // Anima a descida da frase usando GSAP
      gsap.to(frase, {
        duration: 1,
        y: deltaY,
        ease: "power2.out"
      });
    }, 2000); // Espera o fade-in acabar
  };
  