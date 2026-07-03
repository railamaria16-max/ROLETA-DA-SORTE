//=========================================================
// ROLETA DA SORTE
// ETAPA 2
//=========================================================

const SVG_NS = "http://www.w3.org/2000/svg";

const wheel = document.getElementById("wheel");

const RAIO = 340;

const setores = [

    { cor:"#d71920" },
    { cor:"#123f90" },
    { cor:"#ffffff" },
    { cor:"#d71920" },
    { cor:"#123f90" },
    { cor:"#ffffff" },
    { cor:"#d71920" },
    { cor:"#123f90" }

];

const ANGULO = 360 / setores.length;


//=========================================================

function criar(tipo){

    return document.createElementNS(SVG_NS,tipo);

}

//=========================================================

function ponto(angulo){

    const rad = (angulo-90) * Math.PI / 180;

    return{

        x:Math.cos(rad)*RAIO,

        y:Math.sin(rad)*RAIO

    }

}

//=========================================================

function desenharRoleta(){

    wheel.innerHTML="";

    setores.forEach((setor,index)=>{

        const inicio = index * ANGULO;

        const fim = inicio + ANGULO;

        const p1 = ponto(inicio);

        const p2 = ponto(fim);

        const path = criar("path");

        path.setAttribute(
            "d",
            `
            M 0 0
            L ${p1.x} ${p1.y}
            A ${RAIO} ${RAIO} 0 0 1 ${p2.x} ${p2.y}
            Z
            `
        );

        path.setAttribute("fill",setor.cor);

        path.setAttribute("stroke","#D4AF37");

        path.setAttribute("stroke-width","6");

        wheel.appendChild(path);

    });

}

desenharRoleta();
