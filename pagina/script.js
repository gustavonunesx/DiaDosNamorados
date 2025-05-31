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
const texto = document.querySelector('.texto');

window.addEventListener('scroll', () => {
    const textoTop = texto.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (textoTop < windowHeight - 100) {
        texto.classList.add('show');
    }
});

function typeWriter(elemento, velocidade = 100) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, velocidade * i);
    });
}

texto = document.getElementById('typewriter-text');
typeWriter(texto, 90); // 80 é a velocidade em ms (pode ajustar)

