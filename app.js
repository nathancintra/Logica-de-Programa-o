let numerosSorteador = [];
let numeroLimite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function exibirMenssagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero Sécreto!');
    exibirTextoNaTela('p', 'Escolha um numero de 1 a 1000');
}

exibirMenssagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabens');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa!';
        let menssagemTentativa = `Você acertou em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', menssagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', '0 número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeLista = numerosSorteador.length;

    if (quantidadeLista == numeroLimite) {
        numerosSorteador = [];
    }

    if (numerosSorteador.includes(numeroEscolhido)) {
        ;
        return gerarNumeroAleatorio();
    } else {
        numerosSorteador.push(numeroEscolhido);
        console.log(numerosSorteador);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}