//Acessa o elemento HTML pelo seu id e adiciona um ouvinte (addEventListener) de eventos para click
document.getElementById('mudarCor').addEventListener('click', function(){
//A função getElementeById é um método do objeto 'document' que representa todo documento HTML
//Buscando no documento um elemento que tenha atributo 'id' especificado, neste cao, 'mudar cor'
//O 'addEventListener' é um método que permite configurar funções para serem chamadas quando um evento específico ocorre no elemento, no caso o 'click'
    //Gera cores aleatórias hexadecimal
    //Math.random gera o n aleatorio entre 0 e 1
     //Math.random * 16777215 multiplica com o n aleatorio
    //Math.floor é usado para arrendondar o n resultante para inteiro mais proximo menor ou igual, garantindo que nao tenhamos casas decimais
    //toString(16) Converte o n inteiro para uma string em base hexadecimal (base 16). necessarios pq em css cores que usam valores hexadecimais precisam de strings
    const corAleatoria = Math.floor(Math.random() * 16777215).toString(16);
     //Muda a cor de fundo
     //document.body acessa o elemento body do documento HTML
     //style permite modificar o estilo css do elemento
     //backgroundColor é cor de fundo, com o # permite a cor ser aleatoria
    document.body.style.background = "#" + corAleatoria;

});