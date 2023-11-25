var usuario = prompt("Seu nome");
var valorEmPeso = 50;
var cotacaoDoCardano = 123.36;

var valorEmCardano = valorEmPeso * cotacaoDoCardano;
var valorEmCardano = valorEmCardano.toFixed(2);
alert(usuario + " Valor aproximado é de: ADA " + valorEmCardano);
