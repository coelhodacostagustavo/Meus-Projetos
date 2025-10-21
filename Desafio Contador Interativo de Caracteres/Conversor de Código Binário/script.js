function converterParaBinario() {
    /* Declaração da função 'converterParaBinario', que 
            não recebe nenhum parâmetro e é chamada quando necessário. */

    const textoEntrada = document.getElementById('textoEntrada').value;
    /* Busca o elemento HTML com o ID 'textoEntrada' e obtém o 
               valor atual (o texto digitado pelo usuário).
       Este valor é armazenado na constante 'textoEntrada'. */

    let resultadoBinario = '';
    /* Declara uma variável 'resultadoBinario' inicializada 
               como uma string vazia.
       Esta variável acumulará o resultado final da conversão 
               de cada caractere de texto para binário. */

    for (let i = 0; i < textoEntrada.length; i++) {
        /* Um laço 'for' que itera sobre cada caractere da 
               string 'textoEntrada'.
           'i' é o índice do caractere atual na string, começando 
                  de 0 até o comprimento da string menos um. */

        const binario = textoEntrada.charCodeAt(i).toString(2).padStart(8, '0');
        /* - 'textoEntrada.charCodeAt(i)' obtém o código ASCII 
                  do caractere no índice 'i'.
           - '.toString(2)' converte esse código numérico para 
                  sua representação binária (base 2).
           - '.padStart(8, '0')' garante que a string binária 
                  tenha pelo menos 8 dígitos, preenchendo com 
                  zeros à esquerda se necessário.
           Essa operação é armazenada na constante 'binario'. */

        resultadoBinario += binario + ' ';
        /* Concatena o binário obtido ao 'resultadoBinario' 
                  atual e adiciona um espaço após cada binário 
                  para separá-los. */

    }


    document.getElementById('textoSaida').value = resultadoBinario.trim();
    /* Busca o elemento HTML com o ID 'textoSaida' e 
               define seu valor para 'resultadoBinario'.
       '.trim()' é usado para remover qualquer espaço extra 
               no final da string antes de definir o valor.
       Isso atualiza o campo de saída na página com a 
               string de binário convertida. */

}


function converterParaTexto() {

        const textoEntrada = document.getElementById('textoEntrada').value;

        const arrayBinario = textoEntrada.split(' ');

        let resultadoTexto = '';

        for (let i = 0; i < arrayBinario.length; i++) {
                const decimal = parseInt(arrayBinario[i], 2);

                resultadoTexto += String.fromCharCode(decimal);
                
        }

        document.getElementById('textoSaida').value = resultadoTexto;

}

function mostrarExplicacao() {

        document.getElementById('modalExplicacao').style.display = "block";

}

function fecharExplicacao() {

        document.getElementById('modalExplicacao').style.display = 'none';

}

window.onclick = function(event) {

        const modal = document.getElementById('modalExplicacao');    

        if (event.target === modal) {

                modal.style.display = 'none';

        }

}