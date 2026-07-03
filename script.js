const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
let rotacaoAtual = 0;

botao.addEventListener("click", () => {
    botao.disabled = true;
    
    // Sorteia entre 5 a 10 voltas completas
    const voltas = Math.floor(Math.random() * 5) + 5;
    const anguloExtra = Math.floor(Math.random() * 360);
    
    rotacaoAtual += (voltas * 360) + anguloExtra;
    
    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;
    
    setTimeout(() => {
        botao.disabled = false;
    }, 6000); // 6 segundos é o tempo da transição
});
