const salarios =[1500, 2500, 3000, 1800];

const salariosMenores = salarios.filter(salario => salario < 2000);

const salariosComBonus = salariosMenores.map(salario => salario + 500);

console.log(salariosComBonus);
