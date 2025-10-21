//Seleciona o elemento <textarea> pelo ID "texto" para armazenar na variável textarea
const textarea = document.getElementById('texto');
//Seleciona o elemento <p> pelo ID "contador" para armazenar na variável contador
const contador = document.getElementById('contador');
//Defini o máximo de caracteres permitidos
const limite = 50;
//Função que atualiza a contagem de caracteres
function atualizarContagem() {
    //Pega o número de caracteres digitados no textarea
    const numeroCaracteres = textarea.value.length;
    //Atualiza o texto do contador em tempo real
    contador.textContent = `${numeroCaracteres}/${limite}`;
//Verifica se o número de caracteres está dentro do limite estabelecido
if (numeroCaracteres <= limite) {
    //Números ficam da cor verde entre os números 1 ao 50
    contador.style.color = 'green';
 } else {
    //Números ficam da cor vermelha a partir do número 51
    contador.style.color = 'red';
 }
}
//Ouvinte de evento ao textarea que chama a função atualizarContagem() toda vez que o usuário digitar (evento 'input')
textarea.addEventListener('input', atualizarContagem);