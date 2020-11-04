class Moeda extends Animacao {
  constructor(matriz, imagem , x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {   
    super(matriz, imagem , x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay)

    this.y = height - this.altura - this.variacaoY;
    this.velocidade = velocidade;
    this.delay = delay;
  
  }
  
  move() {
    this.x = this.x - this.velocidade;
    //console.log(this.y);
    
    if(this.x < -this.largura){
      setTimeout ( () => {
        this.x = width; 
        this.y = Math.floor( Math.random() * (490 - (590)) + (590));
      }, this.delay * 1000);
      
    //console.log(new Date().getSeconds());  
    }
    
  }

}