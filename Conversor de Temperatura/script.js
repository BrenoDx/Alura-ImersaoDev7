var nomeUsuario = prompt("Digite seu nome");
var celsius = prompt("Digite a temperatura da sua cidade");
celsius = celsius.replace("°C", "");
celsius = celsius.replace("°c", "");
celsius = celsius.replace("c", "");

var fahrenheit = celsius * 1.8 + 32;
var fahrenheit = fahrenheit.toFixed(3);
var kelvin = celsius + 273.15;

alert(
  nomeUsuario +
    " de acordo com a temperatura da sua cidade " +
    celsius +
    " convertendo para FAHRENHEIT: " +
    fahrenheit +
    "°F" +
    " e para KELVIN: " +
    kelvin +
    "K"
);
