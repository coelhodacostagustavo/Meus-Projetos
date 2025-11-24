let pontuacaoJogador = parseInt(localStorage.getItem('ppts_pontuacaoJogador')) || 0;
let pontuacaoComputador = parseInt(localStorage.getItem('ppts_pontuacaoComputador')) || 0;

document.getElementById('pontuacao-jogador').innerText = pontuacaoJogador;
document.getElementById('pontuacao-computador').innerText = pontuacaoComputador;

function jogar(escolhaJogador) {

    const opcoes = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];

    let resultado;
    let motivo;

    if (escolhaJogador === escolhaComputador) {
        resultado = 'Empate';
        motivo = '';
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'pedra' && escolhaComputador === 'lagarto')
    ) {
        resultado = 'Você ganhou!';
        motivo = escolhaJogador === 'pedra' && escolhaComputador === 'tesoura' ? 'Pedra quebra a tesoura' : 'Pedra esmaga o lagarto';
        pontuacaoJogador++;
    } else if (
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'spock')
    ) {
        resultado = 'Você ganhou!';
        motivo = escolhaJogador === 'papel' && escolhaComputador === 'pedra' ? 'Papel cobre a pedra' : 'Papel refuta o Spock';
        pontuacaoJogador++;
    } else if (
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'lagarto')
    ) {
        resultado = 'Você ganhou!';
        motivo = escolhaJogador === 'tesoura' && escolhaComputador === 'papel' ? 'Tesoura corta o papel' : 'Tesoura decapita o lagarto';
        pontuacaoJogador++;
    } else if (
        (escolhaJogador === 'lagarto' && escolhaComputador === 'spock') ||
        (escolhaJogador === 'lagarto' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você ganhou!';
        motivo = escolhaJogador === 'lagarto' && escolhaComputador === 'spock' ? 'Lagarto envenena o Spock' : 'Lagarto come o papel';
        pontuacaoJogador++;
    } else if (
        (escolhaJogador === 'spock' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'spock' && escolhaComputador === 'pedra')
    ) {
        resultado = 'Você ganhou!';
        motivo = escolhaJogador === 'spock' && escolhaComputador === 'tesoura' ? 'Spock esmaga a tesoura' : 'Spock vaporiza a pedra';
        pontuacaoJogador++;
    } else {
        resultado = 'Você perdeu!';
        if (escolhaComputador === 'pedra' && (escolhaJogador === 'tesoura' || escolhaJogador === 'lagarto')) {
            motivo = escolhaJogador === 'tesoura' ? 'Pedra quebra tesoura' : 'Pedra esmaga o lagarto';
        } else if (escolhaComputador === 'papel' && (escolhaJogador === 'pedra' || escolhaJogador === 'spock')) {
            motivo = escolhaJogador === 'pedra' ? 'Papel cobre a pedra' : 'Papel refuta o Spock';
        } else if (escolhaComputador === 'tesoura' && (escolhaJogador === 'papel' || escolhaJogador === 'lagarto')) {
            motivo = escolhaJogador === 'papel' ? 'Tesoura corta o papel' : 'Tesoura decapita o lagarto';
        } else if (escolhaComputador === 'lagarto' && (escolhaJogador === 'spock' || escolhaJogador === 'papel')) {
            motivo = escolhaJogador === 'spock' ? 'Lagarto envenena o Spock' : 'Lagarto come o papel';
        } else if (escolhaComputador === 'spock' && (escolhaJogador === 'tesoura' || escolhaJogador === 'pedra')) {
            motivo = escolhaJogador === 'tesoura' ? 'Spock esmaga tesoura' : 'Spock vaporiza a pedra';
        }

        pontuacaoComputador++;
    }

    document.getElementById('resultado').innerText = `${resultado} ${motivo}`;
    document.getElementById('pontuacao-jogador').innerText = pontuacaoJogador;
    document.getElementById('pontuacao-computador').innerText = pontuacaoComputador;

    localStorage.setItem('ppts_pontuacaoJogador', pontuacaoJogador);
    localStorage.setItem('ppts_pontuacaoComputador', pontuacaoComputador);

    document.getElementById('escolha-jogador-imagem').src = escolhaJogador + '.png';
    document.getElementById('escolha-jogador-imagem').alt = escolhaJogador;
    document.getElementById('escolha-jogador-nome').innerText = escolhaJogador.charAt(0).toUpperCase() + escolhaJogador.slice(1);

    document.getElementById('escolha-computador-imagem').src = escolhaComputador + '.png';
    document.getElementById('escolha-computador-imagem').alt = escolhaComputador;
    document.getElementById('escolha-computador-nome').innerText = escolhaComputador.charAt(0).toUpperCase() + escolhaComputador.slice(1);
}

const modal = document.getElementById('regras-modal');

const btn = document.getElementById('regras-btn');

const span = document.getElementById('close-btn');

btn.onclick = function () {

    modal.style.display = 'block';

}

    span.onclick = function () {

        modal.style.display = 'none';

    }

    window.onclick = function (event) {

        if (event.target == modal) {

            modal.style.display = 'none';
            
        }

}
