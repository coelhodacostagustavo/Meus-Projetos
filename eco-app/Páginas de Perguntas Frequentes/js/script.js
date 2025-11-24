function alternarResposta(elemento) {
    //querySelector é o método que econtra o primeiro elemento filho que corresponda ao seletor CSS .resposta
    const resposta = elemento.querySelector('.resposta');
    //método toggle  é chamado no classList do elemento resposta, adicionando a classe mostrar se não estiver presente ou remove se estiver aplicada
    resposta.classList.toggle('mostrar');

    resposta.classList.toggle('escondido');

}