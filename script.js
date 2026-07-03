const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
let rotacaoAtual = 0;

botao.addEventListener("click", () => {
    botao.disabled = true; // Impede clicar enquanto gira
    
    // Sorteia um giro entre 5 e 10 voltas completas
    const voltas = Math.floor(Math.random() * 5) + 5;
    const anguloExtra = Math.floor(Math.random() * 360);
    
    rotacaoAtual += (voltas * 360) + anguloExtra;
    
    roleta.style.transform = `rotate(${rotacaoAtual}deg)`;
    
    // Libera o botão após o giro (5 segundos conforme o CSS)
    setTimeout(() => {
        botao.disabled = false;
    }, 5000);
});
