//=====================================
// ROLETA DA SORTE
//=====================================

const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const popup = document.getElementById("popup");
const resultado = document.getElementById("resultado");
const fechar = document.getElementById("fechar");

//=====================================
// PRÊMIOS
//=====================================

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

const totalSetores = premios.length;
const anguloSetor = 360 / totalSetores;

let girando = false;
let rotacaoAtual = 0;

//=====================================
// GIRAR ROLETA
//=====================================

function girarRoleta(){

    if(girando) return;

    girando = true;

    botao.disabled = true;

    popup.classList.remove("ativo");

    // Sorteia um setor
    const indice = Math.floor(Math.random() * totalSetores);

    // Centro do setor
    const centro = indice * anguloSetor + anguloSetor / 2;

    // Ponteiro está em cima
    const destino = 360 - centro;

    // Entre 6 e 8 voltas
    const voltas = (6 + Math.floor(Math.random() * 3)) * 360;

    rotacaoAtual += voltas + destino;

    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;

    setTimeout(() => {

        resultado.textContent = premios[indice];

        popup.classList.add("ativo");

        girando = false;

        botao.disabled = false;

    }, 6000);

}

//=====================================
// EVENTOS
//=====================================

botao.addEventListener("click", girarRoleta);

fechar.addEventListener("click", () => {

    popup.classList.remove("ativo");

});

popup.addEventListener("click", (e) => {

    if(e.target === popup){

        popup.classList.remove("ativo");

    }

});

//=====================================
// TECLAS
//=====================================

document.addEventListener("keydown", (e)=>{

    if(e.code === "Space"){

        e.preventDefault();

        girarRoleta();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key === "Escape"){

        popup.classList.remove("ativo");

    }

});
