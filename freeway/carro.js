//codigo do carro

let Ycarros = [40, 100, 150, 210, 270, 318]
let velocidadeCarros = [2, 3, 4.5, 5, 2, 3.3]
let Xcarros = [600, 600, 600, 600, 600, 600]
let alturaCarros = 50
let comprimentoCarros = 40

function mostraCarro (){
  for (let i = 0;  i < imagemDoCarros.length; i ++ )
  {image(imagemDoCarros[i],Xcarros[i],Ycarros[i],alturaCarros,comprimentoCarros);
}
}

function movimentaCarro(){
  for (let i = 0;  i < imagemDoCarros.length; i ++ )
 { Xcarros[i] -= velocidadeCarros[i];}
}

function voltaPosicaoInicialDoCarro(){
   for (let i = 0;  i < imagemDoCarros.length; i ++ ){
  if (passouTodaTela(Xcarros[i])){
    Xcarros[i] = 600;
   }}
}

function passouTodaTela (Xcarros){
  
  return Xcarros < - 50;
}