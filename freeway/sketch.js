function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(ImagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}