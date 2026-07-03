const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const popup = document.getElementById("popup");
const resultado = document.getElementById("resultado");
const fechar = document.getElementById("fechar");

const premios = [
    "Rexona", "Tente Outra Vez", "OMO", "Hellmann's", 
    "Clear", "Necessaire", "Brinde Surpresa", "Tente Outra Vez"
];

const TOTAL = premios.length;
const ANGULO = 360 / TOTAL;
let girando = false;
let rotacaoTotal = 0;

function girarRoleta() {
    if (girando) return;
    girando = true;
    botao.disabled = true;

    const indiceSorteado = Math.floor(Math.random() * TOTAL);
    
    // Calcula o ângulo base para o item sorteado
    const grauPorItem = 360 / TOTAL;
    const destino = (indiceSorteado * grauPorItem) + (grauPorItem / 2);
    
    // Adiciona 5 voltas completas + o ângulo de destino
    const voltas = 5 * 360;
    rotacaoTotal += voltas + (360 - destino - (rotacaoTotal % 360));

    roleta.style.transform = `rotate(${rotacaoTotal}deg)`;

    setTimeout(() => {
        resultado.textContent = premios[indiceSorteado];
        popup.classList.add("ativo");
        girando = false;
        botao.disabled = false;
    }, 6050); // 6 segundos de animação
}

botao.addEventListener("click", girarRoleta);
fechar.addEventListener("click", () => popup.classList.remove("ativo"));
