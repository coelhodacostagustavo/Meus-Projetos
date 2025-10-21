//Ouvinte de evento ao documento
//DOMContentLoaded é disparado quando todo conteudo HTML foi carregado
document.addEventListener('DOMContentLoaded', () => {
    //Define a data do evento e cria o objeto data
    const dataEvento = new Date('May 12 2030 00:00:00').getTime();
    //Define o intervalo de tempo que executa a função
    const intervalo = setInterval(() => {
        //Obtem o tempo atual desde 1 de jan de 1970 (UTC) o timestamp
        const agora = new Date().getTime();
        //Calucla a distancia de tempo que falta
        const distancia = dataEvento - agora;
        ////Calcula quantos dias faltam (Inicia o calculo das unidades de tempo restante)
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        //Calcula quantas horas faltam(Math.floor arredonta para baixo)
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        //Calcula quantos minutos faltam
        const minutos = Math.floor((distancia % (distancia % (1000 * 60 * 60)) / (1000 * 60)));
        //Calcula quantos segundos faltam
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        //Atualiza os elementos HTML com valores calculados para semore mostratem 2 digitos
        document.querySelector('#dias .number').textContent = dias < 10 ? '0' + dias : dias;
        document.querySelector('#horas .number').textContent = horas < 10 ? '0' + horas : horas;
        document.querySelector('#minutos .number').textContent = minutos < 10 ? '0' + minutos : minutos;
        document.querySelector('#segundos .number').textContent = segundos < 10 ? '0' + segundos : segundos;
        //Verfica se a data alcançou ou passou a data marcada
        if (distancia < 0) {
            //interrompe o intervalo que atualiza o contador
            clearInterval(intervalo);

            document.querySelector('.contador').innerHTML = "<div>o evento começou!";

        }

    }, 1000);

});