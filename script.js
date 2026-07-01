//=====================================================
// ROLETA DA SORTE
//=====================================================

const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const popup = document.getElementById("popup");
const premioTexto = document.getElementById("premio");
const fechar = document.getElementById("fechar");

//=========================================
// CONFIGURAÇÕES
//=========================================

const premios = [
    "🎁 Brinde Especial",
    "😢 Tente Outra Vez",
    "🎉 Brinde Surpresa",
    "🧴 Brinde Rexona",
    "🧼 Brinde Clear",
    "❤️ Obrigado pela Participação",
    "👜 Brinde Necessaire",
    "🧼 Brinde Clear"
];

// Quantidade de fatias
const totalFatias = premios.length;

// Graus por fatia
const grausFatia = 360 / totalFatias;

// Controle
let girando = false;
let rotacaoAtual = 0;

//=========================================
// FUNÇÃO GIRAR
//=========================================

function girarRoleta(){

    if(girando) return;

    girando = true;

    botao.disabled = true;

    popup.classList.remove("mostrar");

    // Sorteia um prêmio
    const indice = Math.floor(Math.random()*premios.length);

    // Centro da fatia
    const centroFatia = indice * grausFatia + (grausFatia/2);

    // Ponteiro está em cima
    const destino = 360 - centroFatia;

    // Voltas
    const voltas = (8 + Math.floor(Math.random()*4)) * 360;

    rotacaoAtual += voltas + destino;

    roleta.style.transition =
        "transform 8s cubic-bezier(.15,.92,.18,1)";

    roleta.style.transform =
        `rotate(${rotacaoAtual}deg)`;

    // Mostrar resultado
    setTimeout(()=>{

        premioTexto.innerHTML = premios[indice];

        popup.classList.add("mostrar");

        girando = false;

        botao.disabled = false;

    },8000);

}

//=========================================
// BOTÕES
//=========================================

botao.addEventListener("click",girarRoleta);

fechar.addEventListener("click",()=>{

    popup.classList.remove("mostrar");

});

//=========================================
// FECHAR POPUP CLICANDO FORA
//=========================================

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.classList.remove("mostrar");

    }

});

//=========================================
// TECLA ESPAÇO GIRA
//=========================================

document.addEventListener("keydown",(e)=>{

    if(e.code==="Space"){

        e.preventDefault();

        girarRoleta();

    }

});

//=========================================
// ENTER FECHA POPUP
//=========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        popup.classList.remove("mostrar");

    }

});

//=========================================
// ESC FECHA POPUP
//=========================================

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.remove("mostrar");

    }

});

//=========================================
// DUPLO CLIQUE NO LOGO = TELA CHEIA
//=========================================

const logo = document.querySelector(".logo");

if(logo){

    logo.addEventListener("dblclick",()=>{

        if(!document.fullscreenElement){

            document.documentElement.requestFullscreen();

        }else{

            document.exitFullscreen();

        }

    });

}

//=========================================
// ANIMAÇÃO CONTÍNUA DA LUZ
//=========================================

const luz = document.querySelector(".luz");

let brilho = 0;

setInterval(()=>{

    brilho += 0.02;

    if(luz){

        luz.style.transform =
            `scale(${1+Math.sin(brilho)*0.03})`;

    }

},30);

//=========================================
// SOM (opcional)
//=========================================

// Para ativar basta colocar:
// audio/spin.mp3
// audio/winner.mp3

const somGiro = new Audio("audio/spin.mp3");
const somVitoria = new Audio("audio/winner.mp3");

somGiro.volume = .5;
somVitoria.volume = .6;

botao.addEventListener("click",()=>{

    somGiro.currentTime = 0;

    somGiro.play().catch(()=>{});

});

roleta.addEventListener("transitionend",()=>{

    somVitoria.play().catch(()=>{});

});

//=========================================
// CONFETES (opcional)
//=========================================

// Depois iremos adicionar uma biblioteca
// de confetes para deixar o efeito
// igual às promoções.

//=========================================
// FIM
//=========================================