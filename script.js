//============================================
// ROLETA DA SORTE
//============================================

const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const popup = document.getElementById("popup");
const resultado = document.getElementById("resultado");
const fechar = document.getElementById("fechar");

//============================================

const premios = [
    "Rexona",
    "Tente Outra Vez",
    "OMO",
    "Hellmann's",
    "Clear",
    "Necessaire",
    "Brinde Surpresa",
    "Tente Outra Vez"
];

const TOTAL = premios.length;
const ANGULO = 360 / TOTAL;

let girando = false;
let rotacaoAtual = 0;

//============================================

function girarRoleta(){

    if(girando) return;

    girando = true;

    botao.disabled = true;

    popup.classList.remove("ativo");

    // sorteia um setor
    const indice = Math.floor(Math.random() * TOTAL);

    // centro do setor
   const destino = 360 - (indice * ANGULO + ANGULO / 2) + 22.5;

    // entre 6 e 8 voltas
    const voltas = (6 + Math.floor(Math.random() * 3)) * 360;

    rotacaoAtual += voltas + destino;

    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

    setTimeout(() => {

        resultado.textContent = premios[indice];

        popup.classList.add("ativo");

        girando = false;

        botao.disabled = false;

    },6000);

}

//============================================

botao.addEventListener("click", girarRoleta);

fechar.addEventListener("click",()=>{

    popup.classList.remove("ativo");

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("ativo");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        girarRoleta();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.remove("ativo");

    }

});
