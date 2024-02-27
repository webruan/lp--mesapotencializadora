// Seleciona o elemento HTML com o ID 'hero' e o armazena na variável 'hero'.
const hero = document.getElementById('hero');

// Função que verifica se a seção hero está visível na tela
function isHeroVisible(el) { // Declaração de função chamada 'isHeroVisible' que aceita um argumento 'el'.
  const { top, bottom, left, right } = el.getBoundingClientRect(); // Usa 'getBoundingClientRect()' para obter as coordenadas do retângulo do elemento na janela.
  // Obtém as dimensões da janela do navegador.
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  // Verifica se o elemento está verticalmente visível na tela.
  const vertInView = (top <= windowHeight) && (bottom >= 0);
  // Verifica se o elemento está horizontalmente visível na tela.
  const horInView = (left <= windowWidth) && (right >= 0);
  // Retorna verdadeiro se o elemento estiver visível tanto vertical quanto horizontalmente.
  return vertInView && horInView;
}

// Função que carrega as imagens nos respectivos containers
function loadImages() { // Declaração da função 'loadImages'.
  if (isHeroVisible(hero)) { // Verifica se a seção 'hero' está visível na tela.
    const imagePaths = [ // Declaração do array 'imagePaths' que vai conter todas as imagens da página.
      // Define um objeto com as informações da imagem.
      {
        imgNameId: 'benefits-magnets', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-yoga', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-equipment', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-claudia', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-balance', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-freedom', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'benefits-table', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'inhome-table', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'inhome-pendulum', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'inhome-magnets', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'inhome-book', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'inhome-hand', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'feedbacks-claudia', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'material-claudia', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'material-group', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'material-suport', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'material-certificate', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'warranty-7days', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'warranty-claudia', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'offer-warranty', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'offer-ship', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'offer-symbol-small', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'offer-symbol-extra', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'offer-symbol-big', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'offer-symbol-medium', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'doubt-chakras', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'doubt-level', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'doubt-symbol', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'doubt-hologram', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'doubt-floral', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'doubt-table', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'doubt-protocols', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'faq-claudia', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'footer-logo', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'footer-security', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
      {
        imgNameId: 'footer-flags', // O 'imgNameId' recebe a mesma string do nome da imagem desejada
        altText: ''
      },
    ];

    // Loop que itera sobre cada elemento do array 'imagePaths'.
    imagePaths.forEach(imagePath => {
      const imgContainer = document.getElementById(imagePath.imgNameId); // Seleciona o elemento com o ID correspondente ao 'imgNameId' do objeto.
      
      // Verifica se o elemento foi encontrado.
      if (imgContainer) {
        imgContainer.innerHTML = // Define o conteúdo HTML do elemento selecionado.
        `
          <picture>
            <source media="(min-width: 1200px)" srcset="./src/assets/images/desktop/${imagePath.imgNameId}.webp">
            <source media="(min-width: 768px)" srcset="./src/assets/images/tablet/${imagePath.imgNameId}.webp">
            <source media="(min-width: 320px)" srcset="./src/assets/images/mobile/${imagePath.imgNameId}.webp">
            <img loading="lazy" src="./src/assets/images/desktop/${imagePath.imgNameId}.webp" alt="${imagePath.altText}">
          </picture>
        `;
      }
    });

    // Remove o ouvinte de eventos de rolagem após as imagens serem carregadas.
    window.removeEventListener('scroll', loadImages);
  }
}

// Adiciona um ouvinte de eventos de rolagem para chamar a função 'loadImages'.
window.addEventListener('scroll', loadImages);