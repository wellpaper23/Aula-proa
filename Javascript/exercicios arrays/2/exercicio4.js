const velocidades =[60, 75, 82, 90, 65.];

const primeiroMultado = velocidades.find((velocidade) => velocidade > 80);

console.log(`Multa gerada para a velocidade: ${primeiroMultado}`);
