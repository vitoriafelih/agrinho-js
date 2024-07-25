const respostasCorretas = {
    1: '2', // Causam erosão e lixiviação de nutrientes
    2: '2', // Causa seca e reduz a produção
    3: '3'  // Aumentam a incidência de pragas
};

let respostasUsuario = {};

document.querySelectorAll('.alternativa').forEach(button => {
    button.addEventListener('click', function() {
        const perguntaId = this.closest('.pergunta').getAttribute('data-id');
        const resposta = this.getAttribute('data-resposta');
        respostasUsuario[perguntaId] = resposta;

        // Destacar a resposta escolhida
        this.closest('.pergunta').querySelectorAll('.alternativa').forEach(btn => {
            btn.style.backgroundColor = '#ddd';
        });
        this.style.backgroundColor = '#bbb';
    });
});

document.getElementById('verResultado').addEventListener('click', function() {
    let totalCorretas = 0;
    let resultadoTexto = 'Resultados:\n';

    for (const [perguntaId, resposta] of Object.entries(respostasUsuario)) {
        const correta = respostasCorretas[perguntaId];
        if (resposta === correta) {
            totalCorretas++;
            resultadoTexto += `Pergunta ${perguntaId}: Correta\n`;
        } else {
            resultadoTexto += `Pergunta ${perguntaId}: Errada (Correta: ${correta})\n`;
        }
    }

    resultadoTexto += `Total de corretas: ${totalCorretas} de ${Object.keys(respostasCorretas).length}`;
    document.querySelector('.texto-resultado').textContent = resultadoTexto;
});
