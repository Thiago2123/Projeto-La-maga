function preload () {  
  layer1 = loadImage("imagens/cenario/layer1.png");
  layer2 = loadImage("imagens/cenario/layer2.png");
  layer3 = loadImage("imagens/cenario/layer3.png");
  layer4 = loadImage("imagens/cenario/layer4.png");
  layer5 = loadImage("imagens/cenario/layer5.png");
  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');

  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemMoeda = loadImage('imagens/assets/moeda.png');
  
  somInicial = loadSound('sons/celtic.mp3');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somDano = loadSound('sons/somDano.mp3');
  somColeta = loadSound('sons/somColeta.mp3');
  somGanharvida = loadSound('sons/ganharVida.mp3');

  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.ttf');
  gameOverPng = loadImage('imagens/assets/Game_over.png');
  
  fita = loadJSON('fita/fita.json');
  
}