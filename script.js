const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const popup = document.getElementById("popup");
const resultado = document.getElementById("resultado");
const fechar = document.getElementById("fechar");

const premios = ["Rexona", "Tente Outra Vez", "OMO", "Hellmann's", "Clear", "Necessaire", "Brinde Surpresa", "Tente Outra Vez"];
let girando = false;
let rotacaoTotal = 0;

botao.addEventListener("click", () => {
    if (girando) return;
    girando = true;
    botao.disabled = true;

    const sorteio = Math.floor(Math.random() * 8);
    const anguloPorSetor = 360 / 8;
    const destino = (sorteio * anguloPorSetor) + (anguloPorSetor / 2);
    
    rotacaoTotal += (5 * 360) + (360 - destino - (rotacaoTotal % 360));
    roleta.style.transform = `rotate(${rotacaoTotal}deg)`;

    setTimeout(() => {
        resultado.textContent = premios[sorteio];
        popup.classList.add("ativo");
        girando = false;
        botao.disabled = false;
    }, 6050);
});

fechar.addEventListener("click", () => popup.classList.remove("ativo"));
