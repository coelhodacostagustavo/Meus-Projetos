//Ouvinte e eventos adicionado quando o conteudo da pagina(DOM) for cerregado
document.addEventListener('DOMContentLoaded', function(){
    //Função que exibe os contatos
    renderizarContatos();


});

function salvarContatos(contatos) {
    //localStorage.setItem armazena ou atualiza o item contato
    //JSON.stringify(contatos) converte o array de contatos (ou objeto) em string JSON antes de armazenar
    //Este método garante que qualquer lista de contatos seja armazenada, permitindo recuperar entre as sessões do navegador
    localStorage.setItem('contatos', JSON.stringify(contatos));

}

function obterContatos() {
    //[] retorna vazio se não tiver contato armazenado
    return JSON.parse(localStorage.getItem('contatos') || '[]');

}

function adicionarContato(total) {

    const nome = document.getElementById('nome').value;
    
    const email = document.getElementById('email').value;

    const telefone = document.getElementById('telefone').value;

    const novoContato = { id: Date.now(),nome, email, telefone };

    const contatos = obterContatos();

    contatos.push(novoContato);

    salvarContatos(contatos)

    renderizarContatos();

    limparCampos();

}

function limparCampos() {

    document.getElementById('nome').value = '';

    document.getElementById('email').value = '';

    document.getElementById('telefone').value = '';

}

//se nenhum contato for passado para função, ela chamará obterContatos
function renderizarContatos(contatos = obterContatos()) {
    //Acessa o primeiro elemento tbody dentro do elemento table com ID tabelaContatos
    const tbody = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];
    //Limpa o conteudo tbody, para garantir que os contatos não sejam duplicados quando chamar a função novamente
    tbody.innerHTML = '';

    contatos.forEach(function (contato) {

        const tr = document.createElement('tr');
        /* Define o conteúdo interno do <tr> usando template literals 
            para inserir dados do contato em células <td>.
        Inclui também dois botões: um para editar e outro para excluir o 
            contato, ambos com eventos `onclick` que chamam funções `editarContato` e 
            `excluirContato`, respectivamente, passando o `id` do contato como argumento.
        Isso permite a interação com cada contato para modificação ou remoção. */
        tr.innerHTML = `<td>${contato.nome}</td>
                      <td>${contato.email}</td>
                      <td>${contato.telefone}</td>
                      <td>
                        <button onclick="editarContato(${contato.id})">Alterar</button>
                        <button onclick="excluirContato(${contato.id})">Excluir</button>
                      </td>`;
    /* Adiciona o elemento <tr> preenchido ao <tbody> da tabela de contatos.
    Isso efetivamente coloca o contato na tabela visível na página web. */
    tbody.appendChild(tr);
    /* Chama a função `atualizarTotalContatos`, passando o número total de contatos como argumento.
    Esta função atualiza elemento na interface para mostrar quantos contatos estão atualmente armazenados. */
    atualizarTotalContatos(contatos.length);
        
    });

}

function atualizarTotalContatos(total) {

    document.getElementById('totalContatos').textContent = `Total de contatos: ${total}`;

}

function editarContato(id) {

    const contatos = obterContatos();

    const contato = contatos.find(c => c.id === id);

    if (contato) {

        document.getElementById('nome').value = contato.nome;

        document.getElementById('email').value = contato.email;

        document.getElementById('telefone').value = contato.telefone;

        excluirContato(id);

    }

}

function excluirContato(id) {

    let contatos = obterContatos();

    contatos = contatos.filter(contato => contato.id !== id);

    salvarContatos(contatos);

    renderizarContatos();

}

function filtrarContatos() {

    const filtro = document.getElementById('filtro').value.toLowerCase();

    const contatos = obterContatos();

    const filtrados = contatos.filter(contato => 
        contato.nome.toLowerCase().includes(filtro) ||
        contato.email.toLowerCase().includes(filtro) ||
        contato.telefone.includes(filtro)
    )

    renderizarContatos(filtrados);

}
