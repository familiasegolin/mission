function transitionBoxes() {
  const boxes = Array.from({ length: 11 }, (_, i) => document.querySelector(`#box-${i}`));
  const translateYs = Array(boxes.length).fill(0);
  const opacities = [1, 0.5, 0.4, 0.3, 0.2, 0.15, 0.1, 0.05, 0.01, 0];
  let currentIndex = 0;

  function animateNext() {
      if (currentIndex < boxes.length - 1) {

          if (currentIndex === 5) {
              const jesus0 = document.getElementById('jesus-0');
              const jesus1 = document.getElementById('jesus-1');

              jesus0.style.display = 'none';
              jesus1.style.display = 'inline-flex';
          }

          const nextBox = boxes[currentIndex + 1];

          for (let i = 0; i <= currentIndex; i++) {
              translateYs[i] -= 24;

              boxes[i].style.transition = 'transform 1s ease, opacity 1s ease';
              boxes[i].style.transform = `translateY(${translateYs[i]}px)`;

              const distanceFromCurrent = currentIndex - i + 1;
              const newOpacity = opacities[distanceFromCurrent] ?? 0;

              boxes[i].style.opacity = newOpacity.toString();

              if (newOpacity <= 0.01) {
                  boxes[i].classList.remove('visible');
                  boxes[i].classList.add('hidden');
              }
          }

          nextBox.style.transition = 'transform 1s ease, opacity 1s ease';
          nextBox.style.transform = 'translateY(10px)';
          nextBox.style.opacity = '0';
          nextBox.classList.remove('hidden');
          nextBox.classList.add('visible');

          setTimeout(() => {
              nextBox.style.transform = 'translateY(0px)';
              nextBox.style.opacity = '1';
          }, 0);

          // Em vez de esperar "transitionend", só espera 1 segundo para seguir
          setTimeout(() => {
              currentIndex++;
              animateNext();
          }, 1000); // ⚡ MESMO tempo que sua animação leva
      } else {
          setTimeout(() => {
              boxes.forEach(box => {
                  box.style.transition = 'opacity 1s ease';
                  box.style.opacity = '0';
              });

              const jesus0 = document.getElementById('jesus-0');
              const jesus1 = document.getElementById('jesus-1');

              jesus0.style.transition = 'opacity 1s ease';
              jesus1.style.transition = 'opacity 1s ease';

              jesus0.style.opacity = '0';
              jesus1.style.opacity = '0';
          }, 1000);
      }
  }

  animateNext();
}


transitionBoxes();

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
    }, 11000); // 11000 milissegundos
  });
  
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("fullscreenMenu");
  const circle = document.getElementById("circle");
  const circle2 = document.getElementById("circle2");
  
  let menuOpen = false;
  
  hamburger.addEventListener("click", () => {
    menuOpen = !menuOpen;
  
    if (menuOpen) {
      hamburger.classList.add("active");
      circle.style.opacity = "0";
      circle2.classList.add("active");
  
      // Espera a animação do círculo antes de mostrar o menu
      setTimeout(() => {
        menu.classList.add("active");
      }, 400); // mesmo tempo da transição do círculo
    } else {
      hamburger.classList.remove("active");
  
      // Esconde o menu antes de esconder o círculo
      menu.classList.remove("active");
  
      circle2.classList.remove("active");
  
      setTimeout(() => {
        circle.style.opacity = "1";
      }, 600);
    }
  });
  
  const svgs = [
    'assets/carrossel/sol.svg',
    'assets/carrossel/pastor.svg',
    'assets/carrossel/porta.svg',
    'assets/carrossel/pedra_angular.svg',
    'assets/carrossel/videira.svg',
    'assets/carrossel/água.svg',
    'assets/carrossel/estrela.svg',
    'assets/carrossel/raiz.svg',
    'assets/carrossel/caminho.svg',
    'assets/carrossel/pão.svg',
    // coloque os caminhos dos seus SVGs aqui
  ];
  
  let currentIndex = 0;
  const container = document.getElementById('svg-container');
  
  function loadSvg(index) {
    fetch(svgs[index])
      .then(response => response.text())
      .then(svgText => {
        container.innerHTML = svgText;
        const svgElement = container.querySelector('svg');
        svgElement.id = 'animated-svg';
        new Vivus('animated-svg', { type: 'delayed', duration: 40 }); 
        // 40 frames dá mais ou menos 2 segundos de animação (20 fps)
      });
  }

  // Função para avançar
  function nextSvg() {
    currentIndex = (currentIndex + 1) % svgs.length;
    loadSvg(currentIndex);
  }
  
  // Função para voltar
  function prevSvg() {
    currentIndex = (currentIndex - 1 + svgs.length) % svgs.length;
    loadSvg(currentIndex);
  }
  

  // Primeiro SVG depois da intro
  setTimeout(() => {
    loadSvg(currentIndex);
  }, 1000); // 5s ou o tempo da sua animação inicial
  
  // Botões
  document.getElementById('next-button').addEventListener('click', () => {
    nextSvg();
    resetAutoSlide();
  });
  
  document.getElementById('prev-button').addEventListener('click', () => {
    prevSvg();
    resetAutoSlide();
  });
  

  // Carrossel automático
  let autoSlide = setInterval(nextSvg, 5650); // troca a cada 5 segundos
  
  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSvg, 5650);
  }
  