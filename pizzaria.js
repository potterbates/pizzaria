//elaborar um programa para uma pizzaria que calcule o valor de uma pizza conforme o tamanho e os adicionais escolhidos pelo cliente.

//input
//calcular()
//dividir
//valorConta
//numeroClientes
//valorPorCliente

function calcular() {
    let input = document.getElementById("input").value;
    let dividir = document.getElementById("dividir").value;

    let calculo = Number(input) / Number(dividir);

    let valorConta = document.getElementById("valorConta").textContent = `Valor da conta: ${input}`;

    let numeroClientes = document.getElementById("numeroClientes").textContent = `Dividindo por: ${dividir}`;

    let valorPorCliente = document.getElementById("valorPorCliente").textContent = `Valor por cliente: ${calculo}`;
}