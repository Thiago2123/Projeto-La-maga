class TelaInicial {
  constructor() {

  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();



  } 
  
  _imagemDeFundo() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    fill('#222222')
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('La Maga', width / 2, height / 5 * 3);
    

    
    textSize(25);
    textFont('Helvetica');
    fill(1000,1000,1000, sin(frameCount * 0.1) * 150);
    text("↑ for Jump", 0.5 * width, 0.9 * height);
    text("↑↑ for duble Jump", 0.5 * width, 0.94 * height);
    
  }
  
  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
    
  }
  
}