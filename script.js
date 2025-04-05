const toggleButton = document.getElementById('toggleButton');
const icon = document.getElementById('icon');
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
