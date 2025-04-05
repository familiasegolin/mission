document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleButton');
  const icon = document.getElementById('icon');
  const topBarHack = document.getElementById('top-bar-hack');
  let isDarkMode = localStorage.getItem('dark-mode') === 'true'; // Verifica se o modo escuro está salvo no localStorage

  // Se o tema salvo for o modo escuro, aplica o modo escuro ao carregar a página
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    topBarHack.style.backgroundColor = '#000';  // Cor para o modo escuro
  } else {
    document.body.classList.add('light-mode');
    topBarHack.style.backgroundColor = '#eec49b';  // Cor para o modo claro
  }

  toggleButton.addEventListener('click', () => {
    // Alterna o estado do modo
    isDarkMode = !isDarkMode;

    // Alterna as classes no body para mudar o tema
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);

    // Modificando a cor do #top-bar-hack diretamente no JavaScript
    if (isDarkMode) {
      topBarHack.style.backgroundColor = '#000';  // Cor para o modo escuro
    } else {
      topBarHack.style.backgroundColor = '#eec49b';  // Cor para o modo claro
    }

    // Salva a escolha do tema no localStorage
    localStorage.setItem('dark-mode', isDarkMode);
  });
});


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
        duration: 2,
        y: deltaY,
        ease: "power2.out"
      });
    }, 2000); // Espera o fade-in acabar
  };
  