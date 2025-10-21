function calcularAumento() {

    const salarioAntigo = parseFloat(document.getElementById('salarioAntigo').value);

    const salarioNovo = parseFloat(document.getElementById('salarioNovo').value);

    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(salarioAntigo) || isNaN(salarioNovo)) {

        resultadoDiv.innerHTML = "Por favor, insira valores válidos.";

        return;

    }

    const valorAumento = salarioNovo - salarioAntigo;

    const percentualAumento = (valorAumento / salarioAntigo) * 100;

    resultadoDiv.innerHTML = `
        <p>Valor do Aumento: R$ ${valorAumento.toFixed(2)}</p>
        <p>Percentual do Aumento: R$ ${percentualAumento.toFixed(2)}%</P>
    `;

}