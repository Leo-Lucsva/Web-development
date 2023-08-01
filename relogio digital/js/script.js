const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');



function time() {
    console.log('Olá, Mundo!');
    let date = new Date();
    let hr = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (mn < 10) mn = '0' + mn;
    if (sc < 10) sc = '0' + sc;

    hora.textContent = hr;
    minuto.textContent = mn;
    segundo.textContent = sc;
}

// Executa a função pela primeira vez
time();

// Configura o intervalo para repetir a função a cada 1 segundo
setInterval(time, 1000);