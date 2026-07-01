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
const setores = [

    {
        premio:"🎁 Brinde Especial",
        angulo:314.5
    },

    {
        premio:"😢 Tente Outra Vez",
        angulo:359.4
    },

    {
        premio:"🎉 Brinde Surpresa",
        angulo:44.3
    },

    {
        premio:"🧴 Brinde Rexona",
        angulo:89.6
    },

    {
        premio:"🧼 Brinde Clear",
        angulo:134.8
    },

    {
        premio:"❤️ Obrigado pela Participação",
        angulo:180.1
    },

    {
        premio:"👜 Brinde Necessaire",
        angulo:224.9
    },

    {
        premio:"🧼 Brinde Clear",
        angulo:269.7
    }

];
    

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
//=========================
// Escolhe um setor
//=========================
//====================================
// Escolhe um prêmio
//====================================

const setor =
setores[Math.floor(Math.random()*setores.length)];

//====================================
// Quantas voltas dará
//====================================

const voltas =
(9 + Math.random()*3) * 360;

//====================================
// Ângulo atual da roleta
//====================================

const atual =
((rotacaoAtual % 360)+360)%360;

//====================================
// Ângulo desejado
//====================================

const destino =
(360 - setor.angulo + 360)%360;

//====================================
// Diferença
//====================================

let diferenca =
(destino-atual+360)%360;

//====================================
// Rotação final
//====================================

rotacaoAtual += voltas + diferenca;



    
 roleta.style.transition =
"transform 7.8s cubic-bezier(.08,.96,.17,1)";

    roleta.style.transform =
        `rotate(${rotacaoAtual}deg)`;

    // Mostrar resultado
    setTimeout(()=>{

    premioTexto.innerHTML = setor.premio;

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
