let carga = 0;

while (true) {
  if (carga >= 100) {
    console.log("Limite Atingido");
    break;
  }
  console.log("Carga atual: "+ carga+" kg");
  carga += 30;
}
