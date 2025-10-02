window.onload = function () {
  const carouselData = [
    {
      src: './images/PrimeiraJuntos.jpeg',
      alt: 'Nossa primeira foto',
      text: 'A nossa primeira foto juntos... Aqui eu já sabia que seria o começo da melhor história da minha vida!! 💕'
    },
    {
      src: 'foto2.jpg',
      alt: 'Viagem juntos',
      text: 'Essa viagem me mostrou que com você, qualquer lugar vira lar. Que dia incrível! 🌄'
    },
    {
      src: './images/Olhinhos.jpeg',
      alt: 'Nossos olhinhos',
      text: 'Teu olhar é meu lugar preferido no mundo. Obrigado por me fazer tão feliz todos os dias 😍'
    }
  ];

  const carousel = document.getElementById('carousel');
  const img = carousel.querySelector('img');
  const hiddenText = carousel.querySelector('.hidden-text');
  const altLabel = carousel.querySelector('.image-alt');

  let currentIndex = 0;

  function updateCarousel() {
    const current = carouselData[currentIndex];
    img.src = current.src;
    img.alt = current.alt;
    altLabel.textContent = current.alt;
    hiddenText.textContent = current.text;

    // No começo só mostra a legenda
    img.style.display = 'none';
    hiddenText.style.display = 'none';
    altLabel.style.display = 'block';
  }

  // Clique na legenda para mostrar imagem + texto
  altLabel.addEventListener('click', () => {
    img.style.display = 'block';
    hiddenText.style.display = 'block';
    altLabel.style.display = 'none';
  });

  // Clique na imagem para esconder e mostrar legenda
  img.addEventListener('click', () => {
    img.style.display = 'none';
    hiddenText.style.display = 'none';
    altLabel.style.display = 'block';
  });

  // Botões do carrossel
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselData.length;
    updateCarousel();
  });

  // Inicializa o carrossel
  updateCarousel();
};
