alert("Bem vindo Conversor de moedas");
var usuario = prompt(
  "Iremos fazer cotação da LIBRA ESTERLINA, por favor insira o seu nome:"
);
var valorEmLibra = prompt("Agora insira o valor:");

valorEmLibra = valorEmLibra.replace(",", ".");

var cotacaoEmReal = 6.07;
var valorEmReal = valorEmLibra * cotacaoEmReal;
var valorEmReal = valorEmReal.toFixed(2);

alert(usuario + " resultado da cotação para o real é de R$" + valorEmReal);
