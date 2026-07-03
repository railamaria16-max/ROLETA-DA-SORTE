//==================================================
// ROLETA DA SORTE
// VERSÃO 2.0
// WHEEL ENGINE
//==================================================

const SVG = "http://www.w3.org/2000/svg";

//==========================================
// CONFIGURAÇÃO
//==========================================

const CONFIG = {

    raio:350,

    centro:0,

    setores:8,

    duracao:7000,

    voltasMin:8,

    voltasMax:11

};

//==========================================
// CLASSE SETOR
//==========================================

class Setor{

    constructor(id,nome,cor,texto,logo=null){

        this.id=id;

        this.nome=nome;

        this.cor=cor;

        this.texto=texto;

        this.logo=logo;

    }

}

//==========================================
// DADOS DA ROLETA
//==========================================

const setores=[

new Setor(

1,

"Brinde Rexona",

"#d71920",

"#ffffff",

"img/rexona.png"

),

new Setor(

2,

"Tente Outra Vez",

"#103b87",

"#ffffff"

),

new Setor(

3,

"Brinde OMO",

"#ffffff",

"#d71920",

"img/omo.png"

),

new Setor(

4,

"Brinde Hellmann's",

"#d71920",

"#ffffff",

"img/hellmanns.png"

),

new Setor(

5,

"Brinde Clear",

"#103b87",

"#ffffff",

"img/clear.png"

),

new Setor(

6,

"Necessaire",

"#ffffff",

"#103b87",

"img/necessaire.png"

),

new Setor(

7,

"Brinde Surpresa",

"#d71920",

"#ffffff"

),

new Setor(

8,

"Tente Outra Vez",

"#103b87",

"#ffffff"

)

];

//==========================================
// CLASSE ROLETA
//==========================================

class Wheel{

    constructor(){

        this.svg=document.getElementById("roleta");

        this.group=document.getElementById("wheel");

        this.rotacao=0;

        this.anguloSetor=
        360/setores.length;

    }

}

const wheel=new Wheel();
