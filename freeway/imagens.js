//codigo da imagem
let ImagemDaEstrada;
let ImagemDoAtor;
let ImagemDoCarro;
let ImagemDoCarro2;
let ImagemDoCarro3;
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  ImagemDaEstrada = loadImage("imagens/estrada.png");
  ImagemDoAtor = loadImage("imagens/ator-1.png");
  ImagemDoCarro = loadImage("imagens/carro-1.png");
  ImagemDoCarro2 = loadImage("imagens/carro-2.png");
  ImagemDoCarro3 = loadImage("imagens/carro-3.png");
  imagemDoCarros = [ImagemDoCarro, ImagemDoCarro2, ImagemDoCarro3,ImagemDoCarro, ImagemDoCarro2, ImagemDoCarro3];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav")
}