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
    typeWriter(texto, 1); // Delay ajustado para 30ms
});


document.querySelector('.scroll-down').addEventListener('click', function() {
  document.querySelector('.carrossel').scrollIntoView({ 
    behavior: 'smooth' 
  });
});

