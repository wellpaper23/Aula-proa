let peso = 70;
let altura = 1.75;

let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc <= 24.9) {
    console.log("Peso normal");
} else if (imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
