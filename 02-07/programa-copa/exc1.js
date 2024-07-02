const drinkType = 'agua';

let message;

switch (drinkType) {
  case 'agua':
    message = "Substância química cujas moléculas são formadas por dois átomos de hidrogênio e um de oxigênio.";
    break;
  case 'refrigerante':
    message = "Bebida não alcoólica e não fermentada, fabricada industrialmente, à base de água mineral e açúcar.";
    break;
  case 'suco':
    message = "Bebida produzida do líquido extraído de frutos.";
    break;
  default:
    message = "Bebida desconhecida.";
}

console.log(message);