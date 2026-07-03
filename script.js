//========================================
// ROLETA DA SORTE
//========================================

const roleta = document.getElementById("roleta");
console.log(roleta);
btnGirar.onclick = girar;
const popup = document.getElementById("popup");
const resultado = document.getElementById("resultado");
const btnFechar = document.getElementById("fechar");

//========================================
// PRÊMIOS
//========================================

const premios=[

{nome:"Rexona",cor:"branco"},

{nome:"Tente Outra Vez",cor:"branco"},

{nome:"OMO",cor:"vermelho"},

{nome:"Hellmann's",cor:"branco"},

{nome:"Clear",cor:"branco"},

{nome:"Necessaire",cor:"azul"},

{nome:"Surpresa",cor:"branco"},

{nome:"Tente Outra Vez",cor:"branco"}

];
const camada=document.getElementById("setores");

function criarSetores(){

    camada.innerHTML="";

    premios.forEach((premio,i)=>{

        const setor=document.createElement("div");

        setor.className="setor "+premio.cor;

        setor.innerHTML=premio.nome;

        const angulo=i*45+22.5;

        setor.style.transform=
        `rotate(${angulo}deg)
         translateY(-220px)
         rotate(-${angulo}deg)`;

        camada.appendChild(setor);

    });

}

criarSetores();
//========================================

const TOTAL = premios.length;
const ANGULO = 360 / TOTAL;

let girando = false;
let rotacaoAtual = 0;

//========================================

function girar(){

    if(girando) return;

    girando = true;

    btnGirar.disabled = true;

    popup.classList.remove("ativo");

    //------------------------------------
    // Sorteio
    //------------------------------------

    const indice = Math.floor(Math.random() * TOTAL);

    //------------------------------------
    // Centro do setor
    //------------------------------------

    const centro = indice * ANGULO + ANGULO / 2;

    //------------------------------------
    // Ponteiro está em cima
    //------------------------------------

    const destino = 360 - centro;

    //------------------------------------
    // Voltas
    //------------------------------------

    const voltas = (6 + Math.floor(Math.random() * 4)) * 360;

    //------------------------------------

    rotacaoAtual += voltas + destino;

    roleta.style.transform =
        `rotate(${rotacaoAtual}deg)`;

    //------------------------------------

    setTimeout(()=>{

        resultado.textContent = premios[indice];

        popup.classList.add("ativo");

        girando = false;

        btnGirar.disabled = false;

    },6000);

}

//========================================

btnGirar.addEventListener("click",girar);

btnFechar.addEventListener("click",()=>{

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

        girar();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.remove("ativo");

    }

});
