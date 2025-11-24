const tela = document.getElementById('jogo');
const contexto = tela.getContext('2d');

const tamanhoCelula = 20;

let cabecaCobra = { x: 10, y: 10 };
let fruta = { x: 15, y: 15 };
let direcaoX = 0;
let direcaoY = 0;
let pontuacao = parseInt(localStorage.getItem('pontuacaoAcumulado') || '0');

atualizarPontuacao();

const cobra = [{ x: 10, y: 10 }];

function loopJogo() {
    atualizar();
    desenhar();
    setTimeout(loopJogo, 100);
}

function desenhar() {
    contexto.clearRect(0, 0, tela.width, tela.height);

    // Desenhando a fruta
    contexto.fillStyle = '#FF0000';
    contexto.fillRect(fruta.x * tamanhoCelula, fruta.y * tamanhoCelula, tamanhoCelula, tamanhoCelula);

    // Desenhando a cobra
    contexto.fillStyle = '#000000';
    cobra.forEach(celula => {
        contexto.fillRect(celula.x * tamanhoCelula, celula.y * tamanhoCelula, tamanhoCelula, tamanhoCelula);
    });
}

function atualizar() {
    cabecaCobra.x += direcaoX;
    cabecaCobra.y += direcaoY;

    // Verificar colisão com as bordas
    if (cabecaCobra.x < 0 || cabecaCobra.x >= tela.width / tamanhoCelula ||
        cabecaCobra.y < 0 || cabecaCobra.y >= tela.height / tamanhoCelula) {
        reiniciarJogo();
    }

    // Verificar se a cobra comeu a fruta
    if (cabecaCobra.x === fruta.x && cabecaCobra.y === fruta.y) {
        fruta.x = Math.floor(Math.random() * (tela.width / tamanhoCelula));
        fruta.y = Math.floor(Math.random() * (tela.height / tamanhoCelula));

        // Adicionar nova célula à cobra
        const novaCelula = { x: cobra[cobra.length - 1].x, y: cobra[cobra.length - 1].y };
        cobra.push(novaCelula);

        pontuacao++;
        atualizarPontuacao();
    }

    // Mover o corpo da cobra
    for (let i = cobra.length - 1; i > 0; i--) {
        cobra[i] = { ...cobra[i - 1] };
    }
    cobra[0] = { ...cabecaCobra };

    // Verificar colisão com o próprio corpo
    for (let i = 1; i < cobra.length; i++) {
        if (cabecaCobra.x === cobra[i].x && cabecaCobra.y === cobra[i].y) {
            reiniciarJogo();
        }
    }
}

function atualizarPontuacao() {
    document.getElementById('pontuacao').textContent = 'Pontuação: ' + pontuacao;
    localStorage.setItem('pontuacaoAcumulado', pontuacao.toString());
}

function reiniciarJogo() {
    cabecaCobra = { x: 10, y: 10 };
    cobra.length = 1; // Reseta a cobra para o tamanho inicial
    direcaoX = 0;
    direcaoY = 0;
    pontuacao = 0;
    atualizarPontuacao();

    alert('Você perdeu! Clique em OK para jogar novamente.')
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp' && direcaoY !== 1) {
        direcaoX = 0;
        direcaoY = -1;
    } else if (event.key === 'ArrowDown' && direcaoY !== -1) {
        direcaoX = 0;
        direcaoY = 1;
    } else if (event.key === 'ArrowLeft' && direcaoX !== 1) {
        direcaoX = -1;
        direcaoY = 0;
    } else if (event.key === 'ArrowRight' && direcaoX !== -1) {
        direcaoX = 1;
        direcaoY = 0;
    }
});

loopJogo();
