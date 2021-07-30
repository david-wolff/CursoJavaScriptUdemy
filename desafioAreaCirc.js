/*
* Desafio: Exibir na tela a área de uma circunferência com as medidas.
*/

// PI  = 3.141592

// Área de uma circunferência: PI * raio²


//const PI = 3.141592; o valor já existe na biblioteca Math
let raio = 12;
let area = Math.PI * (Math.pow(raio, 2));


console.log(
    "Área da circunferência de raio " + raio 
    + "\ncorresponde a: " + area
)


