var jogadores = [
  {
    nome: "BrenoDX",
    vitoria: 0,
    Kills: 0,
    Assist: 0,
    pontos: 0,
    Img: "https://i.im.ge/2023/11/18/A96KmJ.download-4.jpg"
  },
  {
    nome: "GabrieLBJ",
    vitoria: 0,
    Kills: 0,
    Assist: 0,
    pontos: 0,
    Img: "https://i.im.ge/2023/11/18/A96JaK.download-1.jpg"
  },
  {
    nome: "FilipeBn",
    vitoria: 0,
    Kills: 0,
    Assist: 0,
    pontos: 0,
    Img: "https://i.im.ge/2023/11/18/A96G18.download-2.jpg"
  },
  {
    nome: "Deathjao",
    vitoria: 0,
    Kills: 0,
    Assist: 0,
    pontos: 0,
    Img: "https://i.im.ge/2023/11/18/A9NTXY.download-3.jpg"
  }
];
var elementoTabela = document.getElementById("tabelaJogadores");
exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = "";
  for (var i = 0; i < jogadores.length; i++)
    elementoTabela.innerHTML += `
    <tr>
        <td><img src ="${jogadores[i].Img}" alt="${jogadores[i].nome}" width="50"></td>    
        <td>${jogadores[i].nome}</td>
        <td>${jogadores[i].vitoria}</td>
        <td>${jogadores[i].Kills}</td>
        <td>${jogadores[i].Assist}</td>
        <td>${jogadores[i].pontos}</td>
        <td><button 
 onClick="adicionarVitoria(${i})">Win</button></td>
 <td><button onClick="adicionarKills(${i})">Kills</button></td>
        <td><button onClick="adicionarAssist(${i})">Assist</button></td>
      </tr>
`;
}

function adicionarVitoria(i) {
  jogadores[i].vitoria++;
  jogadores[i].pontos = jogadores[i].pontos + 2;
  exibirNaTela();
}

function adicionarKills(i) {
  jogadores[i].Kills++;
  jogadores[i].pontos = jogadores[i].pontos + 0.5;
  exibirNaTela();
}

function adicionarAssist(i) {
  jogadores[i].Assist++;
  jogadores[i].pontos = jogadores[i].pontos + 0.25;
  exibirNaTela();
}
