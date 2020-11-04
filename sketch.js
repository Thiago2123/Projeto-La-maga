function setup() {
  createCanvas(windowWidth / 1.5 , windowHeight / 1.5 );
  console.log ('largura do game =', windowWidth, 'altura do game =', windowHeight);
  
  frameRate(40)
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  gameOver = new GameOver();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
    gameOver
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2.3, height / 2);
	console.log('largura =' ,  width, 'altura =', height);	
	
  somInicial.play();
  somInicial.setVolume(0.3);
  somInicial.loop();
  //somDoJogo.stop();
}
 

function mouseClicked() {
  if(cenaAtual === 'jogo'){
    console.log('cel');
    personagem.pula();
  }
}


function keyPressed() {
 jogo.keyPressed(key);
}

function draw() { 
  cenas[cenaAtual].draw();
} 