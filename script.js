window.onload = function () {
  const carouselData = [
    {
      src: './images/PrimeiraJuntos.jpeg',
      alt: 'Nossa primeira foto',
      text: 'A nossa primeira foto juntos... Aqui eu já sabia que seria o começo da melhor história da minha vida 💕'
    },
    {
      src: './images/Olhinhos.jpeg',
      alt: 'Nossos olhinhos',
      text: 'Teu olhar é meu lugar preferido no mundo. Obrigado por me fazer tão feliz todos os dias 😍'
    },
    {
      src: './images/FormaturaEscola.jpeg',
      alt: 'Nossa Formatura',
      text: 'Momento muito importante pra nós, mas só foi, de fato, maravilhoso por conta da tua presença. Tu transformas tudo em paz, harmonia e saudade 🥰'
    },
    {
      src: './images/AnoNovo.jpeg',
      alt: 'Ano novo juntos',
      text: 'Essa viagem me mostrou que com você, não importa aonde eu esteja e em qual situação, tu vai ser sempre a melhor parte de tudo ❤️'
    },

    {
      src: './images/Despedida.jpeg',
      alt: 'Nossa Despedida',
      text: 'Já passamos por momentos muito difíceis, muito tristes e complicados. (Eu ri na hora, mas fiquei muito triste de verdade) 🥺'
    },
    {
      src: './images/casaquinho.jpeg',
      alt: 'E toda a nossa história só é incrível, por conta de',
      text: 'VOCÊ 💕🧥'
    },
    {
      src: './images/dor.jpeg',
      alt: 'VOCÊ ❣️',
      text: 'MEU AMOR 💤'
    },
    {
      src: './images/ligacao.png',
      alt: 'VOCÊ 💓',
      text: 'MINHA PRINCESA 📷'
    },
    {
      src: './images/neneco.jpeg',
      alt: 'VOCÊ 💗',
      text: 'MINHA DEUSA 🐇'
    },
    {
      src: './images/POPHEAD.jpeg',
      alt: 'VOCÊ 💘',
      text: 'MINHA ANIVERSARIANTE 💩'
    },
    {
      src: './images/congratulations-1173.gif',
      alt: '! POR FIM !',
      text: 'Eu queria te parabenizar por mais um ano de vida. Te parabenizar por ser essa menina incrível e carismática que você é. Você é autêntica, é única. Tu és a pessoa mais incrível que eu já conheci. Muito obrigado por fazer parte da minha vida. Eu te quero pra sempre aqui comigo, simplesmente pelo fato de você ser você. Tu és linda, inteligente, tem um humor bem estranho e é extremamente amorosa. Tu és incrível, meu amor. FELIZ DIA 2! EU TE AMO!!!!!'
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
