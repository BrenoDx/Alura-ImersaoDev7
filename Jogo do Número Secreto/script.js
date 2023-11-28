var jogar = prompt("Você quer jogar ?")
if(jogar == "sim")
var numeroSecreto = parseInt(Math.random() * 100)
var tentativas = 0
var tentativasRestantes = 15


while(chute != numeroSecreto) {
  var chute = prompt("Digite um número")
  tentativas = tentativas + 1
  tentativasRestantes = tentativasRestantes - 1
  if (chute == numeroSecreto) {alert("Acertou" + " Tentativa: " + tentativas)
 }  else if (chute > numeroSecreto) {
   alert("Errou... número secreto é menor do que: " + chute + " Tentativas restantes: " + tentativasRestantes)
 } else if (chute < numeroSecreto) {
   alert("Errou... número secreto é maior do que: " + chute + " Tentativas restantes: " + tentativasRestantes)
 }
if (tentativasRestantes == 0) {
  alert("Esgotou todas tentativas, o resultado é: " + numeroSecreto )
  chute = numeroSecreto}
}
