// Cronômetro
const timer = document.getElementById('timer');
const dataInicio = new Date('2024-01-28T00:00:00');

function atualizaTempo() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    timer.innerHTML = `${dias} dias, ${horas}h, ${minutos}min, ${segundos}s`;
}

setInterval(atualizaTempo, 1000);
atualizaTempo();

// Corações subindo
const heartsContainer = document.querySelector('.coraçoes');

function criarCoracao() {
    const heart = document.createElement('span');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(criarCoracao, 300);

// Texto aparecendo no scroll
const textoContainer = document.querySelector('.texto');

window.addEventListener('scroll', () => {
    const textoTop = textoContainer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (textoTop < windowHeight - 100) {
        textoContainer.classList.add('show');
    }
});

// Efeito máquina de escrever
// Efeito máquina de escrever (versão otimizada)
function typeWriter(elemento, velocidade = 30) {
    const textoOriginal = elemento.innerHTML;
    elemento.textContent = ''; // Limpa sem afetar atributos
    
    let i = 0;
    let dentroDeTag = false;
    let tagBuffer = '';

    function escrever() {
        if (i < textoOriginal.length) {
            const char = textoOriginal[i];

            if (char === '<') {
                dentroDeTag = true;
                tagBuffer = char;
            } 
            else if (char === '>' && dentroDeTag) {
                tagBuffer += char;
                if (tagBuffer.match(/^<(\w+)(.*?)>$/)) {
                    elemento.innerHTML += tagBuffer;
                }
                dentroDeTag = false;
                tagBuffer = '';
            } 
            else if (dentroDeTag) {
                tagBuffer += char;
            }
            else {
                elemento.innerHTML += char;
            }

            i++;
            setTimeout(escrever, velocidade);
        }
    }

    escrever();
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    const texto = document.getElementById('typewriter-text');
    typeWriter(texto, 1); 
});


document.querySelector('.scroll-down').addEventListener('click', function() {
  document.querySelector('.carrossel').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

  setTimeout(() => {
    const el = document.getElementById('eu-te-amo');
    el.classList.remove('escondido');
    el.classList.add('visivel');
  }, 5000); // 10 segundos


window.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slides img').length;

  // Troca automática a cada 3 segundos
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  }, 3000);

  function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  // Botões de navegação manual
  document.getElementById('avancar').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });

  document.getElementById('voltar').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  });
});







// Reinicia o timer ao clicar nas setas
function reiniciarIntervalo() {
  clearInterval(intervalo);
  intervalo = setInterval(proximoSlide, 3000);
}

// Carrossel automático
let currentIndex = 0;
slides = document.querySelector('.slides');
totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}vw)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Muda a imagem a cada 3 segundos
setInterval(nextSlide, 3000);

// Botões de navegação manual
document.getElementById('avancar').addEventListener('click', () => {
    nextSlide();
});

document.getElementById('voltar').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
});

let interval = setInterval(nextSlide, 3000);

slides.addEventListener('mouseenter', () => clearInterval(interval));
slides.addEventListener('mouseleave', () => {
    interval = setInterval(nextSlide, 3000);
});


