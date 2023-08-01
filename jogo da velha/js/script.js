const celulas = document.querySelectorAll(".button");

const JOGADOR_X = 'X';
const JOGADOR_O = 'O';

const tela_escura = document.querySelector('#tela-escura');
const h1Element = tela_escura.querySelector('h1');
const h1span = h1Element.querySelector('.span');
const restart = document.querySelector('#restart');
const display = document.querySelector('#display');

const COMBINACOES = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let checar_turno = true;

celulas.forEach((button) => {
    button.addEventListener('click', (evento) => {
        jogar(evento.target.id)
    })
})

function jogar (id) {
    let celula = document.getElementById(id);
    
    if (celula.classList.contains(JOGADOR_O) || celula.classList.contains(JOGADOR_X)) {
        return;
    }
    celula.style.color = 'rgb(19, 228, 0)';
    let turno = JOGADOR_X;
    
    if (checar_turno == false) {
        turno = JOGADOR_O;
        celula.style.color = 'red';

    }
    display.textContent = `Vez do Jogador ${checar_turno ? 'O' : 'X'}`;
    display.style.background = `${checar_turno ? 'red' : 'rgb(19, 228, 0)'}`;
    
    celula.classList.add(turno);
    celula.textContent = turno;

    if (checar_vencedor(turno)) {
        fim_de_jogo(turno);
    }
    else if (checar_empate()) {
        fim_de_jogo('empate');
    }

    checar_turno = !checar_turno;
}

function checar_vencedor (turno) {
    const vencedor = COMBINACOES.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        })
    })  
    return vencedor;
}

function checar_empate () {
    const array_celulas = Array.from(celulas);
    const jogo_empatou = array_celulas.every((celula) => {
        return celula.classList.contains(JOGADOR_X) || celula.classList.contains(JOGADOR_O);
    })
    return jogo_empatou;
}

function tela_empate () {
    h1Element.style.color = 'white';
    h1Element.textContent = 'JOGO EMPATADO';
}

function tela_vitoria (vencedor) {
    if (vencedor == JOGADOR_O) {
        h1Element.style.color = 'red';
        
    }
    h1Element.textContent = `Player ${vencedor} Venceu`;
}

function fim_de_jogo (player) {
    
    if (player == 'empate') {
        tela_empate()
    }
    else {
        tela_vitoria(player)
    }
    
    tela_escura.style.display = 'block';

        setTimeout(() => {
            tela_escura.style.opacity = '1';
          }, 10);
}

restart.addEventListener('click',() => {
    location.reload()
})  

