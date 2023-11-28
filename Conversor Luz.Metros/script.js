var nomeUsuario = prompt("Digite seu nome");
var anosLuz = prompt("Digite quantidade anos luz");
var metrosPorSegun = 299792458;
var resul = (anosLuz * metrosPorSegun).toFixed(2);

alert(nomeUsuario + " valor aproximado é de: " + resul + "m");
