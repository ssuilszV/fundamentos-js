// usando a biblioteca Math, podemos usar o valor muito 
// extenso de PI. O Math.pow seria a potenciação, no 
// caso, o numero que vem dps seria as vezes,
// (raio, 2) ou seja, raio ao quadrado. se 
// fosse por exemplo (raio, 3) seria raio ao cubo e assim
// por diante.
const raio = 7.58, area = Math.PI * Math.pow(raio, 2);
console.log(area.toFixed(2));