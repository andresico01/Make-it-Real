console.log("Ejercicio 1.");

var frase = prompt("\tIngresar el dato que usted desee:\t");

console.log("\tEl dato ingresado es:\t",frase);
console.log("\nEjercicio 2.");

frase = prompt("\tIngresar su primer nombre:\t");

console.log("\tHola",frase);

console.log("\nEjercicio 3.");
cont = 2;
var lista = new Array();
var datosPaciente = new Array("peso","altura");
var valoresPaciente = new Array();
var dato;
var suma = 0;
var resul;

while(cont){
  lista.push(parseInt(prompt("\tIngrese valor numerico:\t")));
  cont-=1;
  
}

lista.forEach(function(dato){
  console.log("\tel dato",cont + 1,"es",dato);
  cont++;
  suma += dato;

})
console.log("\tLa suma es:\t",suma);

console.log("\nEjercicio 4.");

frase = parseInt(prompt("\tIngresar año de nacimiento:\t"));

console.log("\tusted tiene",2020 - frase,"años");

console.log("\nEjercicio 5.");



datosPaciente.forEach(function(dato){
  valoresPaciente.push(parseFloat(prompt("\tIngresar "+dato+" del paciente:\t")));
})
console.log("el indice es de:\t",valoresPaciente[0] / (Math.pow(valoresPaciente[1],2)));