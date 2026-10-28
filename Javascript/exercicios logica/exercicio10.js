let salario = 3000;
let imposto = 0;

if (salario <= 2000) {
    console.log("Isento de imposto.");
} else if (salario <= 4000) {
    let valorTributavel = salario - 2000;
    imposto = valorTributavel * 0.10;
    console.log("Imposto na faixa de 10%. Valor devido: R$ " + imposto);
} else {
    let valorTributavel = salario - 4000;
    imposto = (valorTributavel * 0.20) + 200;
    console.log("Imposto na faixa de 20%. Valor devido: R$ " + imposto);
}
