function calcularGorjeta() {

    const valorConta = parseFloat(document.getElementById('valorConta').value);

    const percentualGorjeta = parseFloat(document.getElementById('percentualGorjeta').value);

    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(valorConta) || isNaN(percentualGorjeta)) {
        
        resultadoDiv.innerHTML = "Por favor, insira valores válidos.";

        return;

    }

    const valorGorjeta = (valorConta * percentualGorjeta) / 100;

    const valorTotal = valorConta + valorGorjeta;

    resultadoDiv.innerHTML = `
        <p>Valor da gorjeta: R$ ${valorGorjeta.toFixed(2)}</p>
        <p>Valor total a pagar: R$ ${valorTotal.toFixed(2)}</p>
    `;

}