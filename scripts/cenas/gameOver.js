class GameOver {
  constructor() {
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
  } 
  
  _imagemDeFundo() {
    image(gameOverPng, 0, 0, width, height);
    
  }
  
  _texto() {
    fill('#ffffff')
    textFont('Helvetica');
    textAlign(CENTER)
    textSize(30);
    text('R para reiniciar ', width / 2, height / 3);
  }
  
}