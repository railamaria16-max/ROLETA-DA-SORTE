//============================================
// ROLETA DA SORTE
//============================================

const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const popup = document.getElementById("popup");
const resultado = document.getElementById("resultado");
const fechar = document.getElementById("fechar");

//============================================
// PRÊMIOS (NA MESMA ORDEM DA ROLETA)
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

//============================================

const TOTAL = premios.length;

const ANGULO = 360 / TOTAL;

let girando = false;

let rotacaoAtual = 0;

//============================================
// GIRAR
//============================================

function girarRoleta(){

    if(girando) return;

    girando = true;

    botao.disabled = true;

    popup.classList.remove("ativo");

    //-------------------------------------
    // SORTEIA O PRÊMIO
    //-------------------------------------

    const indice = Math.floor(Math.random()*TOTAL);

    //-------------------------------------
    // CENTRO DA FATIA
    //-------------------------------------

    const centro = indice * ANGULO + ANGULO/2;

    //-------------------------------------
    // AJUSTE DO PONTEIRO
    //-------------------------------------

    const destino = 360 - centro;

    //-------------------------------------
    // VOLTAS
    //-------------------------------------

    const voltas = (6 + Math.floor(Math.random()*3))*360;

    //-------------------------------------

    rotacaoAtual += voltas + destino;

    //-------------------------------------

    roleta.style.transform =
    `rotate(${rotacaoAtual}deg)`;

    //-------------------------------------

    setTimeout(()=>{

        resultado.innerHTML = premios[indice];

        popup.classList.add("ativo");

        botao.disabled = false;

        girando = false;

    },6000);

}

//============================================
// BOTÕES
//============================================

botao.addEventListener(

    "click",

    girarRoleta

);

fechar.addEventListener(

    "click",

    ()=>{

        popup.classList.remove("ativo");

    }

);

//============================================
// FECHAR CLICANDO FORA
//============================================

popup.addEventListener(

    "click",

    (e)=>{

        if(e.target===popup){

            popup.classList.remove("ativo");

        }

    }

);

//============================================
// ESPAÇO GIRA
//============================================

document.addEventListener(

    "keydown",

    (e)=>{

        if(e.code==="Space"){

            e.preventDefault();

            girarRoleta();

        }

    }

);

//============================================
// ESC FECHA
//============================================

document.addEventListener(

    "keydown",

    (e)=>{

        if(e.key==="Escape"){

            popup.classList.remove("ativo");

        }

    }

);

//============================================
// ENTER FECHA
//============================================

document.addEventListener(

    "keydown",

    (e)=>{

        if(e.key==="Enter"){

            popup.classList.remove("ativo");

        }

    }

);
