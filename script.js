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

    setTimeout(() => heart.remove(), 5000);
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
function typeWriter(elemento, velocidade = 30, aoFinal = null) {
    const textoOriginal = elemento.innerHTML;
    elemento.textContent = '';

    let i = 0;
    let dentroDeTag = false;
    let tagBuffer = '';

    function escrever() {
        if (i < textoOriginal.length) {
            const char = textoOriginal[i];

            if (char === '<') {
                dentroDeTag = true;
                tagBuffer = char;
            } else if (char === '>' && dentroDeTag) {
                tagBuffer += char;
                elemento.innerHTML += tagBuffer;
                dentroDeTag = false;
                tagBuffer = '';
            } else if (dentroDeTag) {
                tagBuffer += char;
            } else {
                elemento.innerHTML += char;
            }

            i++;
            setTimeout(escrever, velocidade);
        } else {
            if (aoFinal) aoFinal(); // callback depois que terminar
        }
    }

    escrever();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById('typewriter-text');
    const euTeAmo = document.getElementById('eu-te-amo');

    // Quando o texto terminar de ser digitado, mostrar "eu te amo"
    if (texto) {
        typeWriter(texto, 40, () => {
            if (euTeAmo) {
                euTeAmo.classList.remove('escondido');
                euTeAmo.classList.add('visivel');
            }
        });
    }

    // Scroll suave
    const scrollBtn = document.querySelector('.scroll-down');
    const carrossel = document.querySelector('.carrossel');
    if (scrollBtn && carrossel) {
        scrollBtn.addEventListener('click', () => {
            carrossel.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Carrossel
    let currentIndex = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slides img').length;

    function showSlide(index) {
        slides.style.transform = `translateX(-${index * 100}vw)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    let interval = setInterval(nextSlide, 3000);

    document.getElementById('avancar').addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    document.getElementById('voltar').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
        resetInterval();
    });

    slides.addEventListener('mouseenter', () => clearInterval(interval));
    slides.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 3000);
    });

    function resetInterval() {
        clearInterval(interval);
        interval = setInterval(nextSlide, 3000);
    }
});
