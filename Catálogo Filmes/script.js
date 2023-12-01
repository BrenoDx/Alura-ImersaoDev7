var filmesDc = [
  "https://i.im.ge/2023/11/16/A2mlGG.mos.jpg",
  "https://i.im.ge/2023/11/16/A2mTlT.bvs.jpg",
  "https://i.im.ge/2023/11/16/A2yc5y.es2016.jpg",
  "https://i.im.ge/2023/11/16/A2jewW.WW.jpg",
  "https://i.im.ge/2023/11/16/A2mw0C.zs.jpg",
  "https://i.im.ge/2023/11/16/A2m7cK.aquaman.jpg",
 "https://i.im.ge/2023/11/16/A2Ar9m.shazam.jpg",
 "https://i.im.ge/2023/11/16/A2xakp.adr.jpg", 
 "https://i.im.ge/2023/11/16/A2AjqK.ww84.jpg",
"https://i.im.ge/2023/11/16/A2xmtc.tsq.jpg",
  "https://i.im.ge/2023/11/16/A2xfYY.ba.jpg",
  "https://i.im.ge/2023/11/16/A2CpeD.shazam2.jpg",
  "https://i.im.ge/2023/11/16/A2m0SM.flash.jpg",
  "https://i.im.ge/2023/11/16/A23Xa0.bb.jpg",
  "https://i.im.ge/2023/11/16/A23Mhm.aquaman-2-reino-perdido.jpg"
               ];
var nomesFilmes = [
  "Man of Steel", "Batman V Superman", "Suicide Squad", "Wonder Woman", "Justice league ZS", "Aquaman", "Shazam!", "Birds of Prey", "Wonder Woman 1984", "The Suicide Squad", "Black Adam", "Shazam! fury Of The Gods", "The Flash", "Blue Beetle", "Aquaman lost"
]
var i = 0;
while (i < filmesDc.length){
  if (filmesDc[i].endsWith('jpg')){
    document.write('<div style="display: inline-block; margin: 40px; color:black;">');
    document.write('<img src=' + filmesDc[i] + '>');
    document.write('<p>' + nomesFilmes[i] + '</p>');
    document.write('</div>');    
  }
  i++;
}
