//========================================
// ROLETA DA SORTE
//========================================

const wheel = document.getElementById("wheel");
const roleta = document.getElementById("roleta");

const botao = document.getElementById("girar");

const popup = document.getElementById("popup");
const premio = document.getElementById("premio");
const fechar = document.getElementById("fechar");

//========================================
// CONFIGURAÇÃO DOS SETORES
//========================================

const setores = [

{
nome:"🎁 Brinde Rexona",
cor:"#d71920"
},

{
nome:"😢 Tente Outra Vez",
cor:"#0b2d73"
},

{
nome:"🎁 Brinde OMO",
cor:"#ffffff",
texto:"#d71920"
},

{
nome:"🎁 Brinde Hellmann's",
cor:"#d71920"
},

{
nome:"🎁 Brinde Clear",
cor:"#0b2d73"
},

{
nome:"🎁 Necessaire",
cor:"#ffffff",
texto:"#0b2d73"
},

{
nome:"🎉 Brinde Surpresa",
cor:"#d71920"
},

{
nome:"😢 Tente Outra Vez",
cor:"#0b2d73"
}

];

//========================================
// DESENHAR ROLETA
//========================================

const total = setores.length;

const angulo = 360 / total;

const raio = 350;

for(let i=0;i<total;i++){

    const inicio = i*angulo-90;

    const fim = inicio+angulo;

    const x1 = raio*Math.cos(inicio*Math.PI/180);

    const y1 = raio*Math.sin(inicio*Math.PI/180);

    const x2 = raio*Math.cos(fim*Math.PI/180);

    const y2 = raio*Math.sin(fim*Math.PI/180);

    const path = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
    );

    path.setAttribute(
    "d",
    `
    M 0 0
    L ${x1} ${y1}
    A ${raio} ${raio} 0 0 1 ${x2} ${y2}
    Z
    `
    );

    path.setAttribute(
    "fill",
    setores[i].cor
    );

    path.setAttribute(
    "stroke",
    "white"
    );

    path.setAttribute(
    "stroke-width",
    "6"
    );

    wheel.appendChild(path);

    //----------------------------------

    const texto =
    document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
    );

    const meio =
    inicio+angulo/2;

    const tx =
    210*Math.cos(meio*Math.PI/180);

    const ty =
    210*Math.sin(meio*Math.PI/180);

    texto.setAttribute(
    "x",
    tx
    );

    texto.setAttribute(
    "y",
    ty
    );

    texto.setAttribute(
    "fill",
    setores[i].texto || "white"
    );

    texto.setAttribute(
    "font-size",
    "26"
    );

    texto.setAttribute(
    "font-weight",
    "800"
    );

    texto.setAttribute(
    "text-anchor",
    "middle"
    );

    texto.setAttribute(
    "transform",
    `rotate(${meio+90} ${tx} ${ty})`
    );

    texto.textContent =
    setores[i].nome;

    wheel.appendChild(texto);

}

//========================================
// GIRAR
//========================================

let girando=false;

let rotacao=0;

botao.onclick=()=>{

if(girando) return;

girando=true;

popup.classList.remove("mostrar");

const indice =
Math.floor(Math.random()*total);

const centro =
indice*angulo+angulo/2;

const voltas =
(8+Math.random()*4)*360;

rotacao +=
voltas+
(360-centro);

wheel.style.transition=
"transform 7s cubic-bezier(.18,.94,.14,1)";

wheel.style.transform=
`rotate(${rotacao}deg)`;

setTimeout(()=>{

premio.innerHTML=
setores[indice].nome;

popup.classList.add("mostrar");

girando=false;

},7000);

}

fechar.onclick=()=>{

popup.classList.remove("mostrar");

}
