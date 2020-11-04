class Personagem extends Animacao {
  
  constructor (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    super (matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.velocidadeDoPulo = 0;
    this.gravidade = 6;
    this.alturaDoPulo = - 40;
    this.pulos = 0;
    this.invencivel = false;
  
  }
  
  // Função pular personagem
  pula () {
    if (this.pulos < 2 ) {
      
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos = this.pulos + 1;
      somDoPulo.setVolume(0.5);
      somDoPulo.play();
      
      
    }
  
  }
  // Ao pular aplica gravidade até o chao 
  aplicaGravidade () {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.pulos = 0;
        
    }
  }
  
  // Ao bater no inimigo se torna invencivel por 0.6 sec
  tornarInvencivel () {
    this.invencivel = true;
    
    imagemPersonagem.filter(INVERT);
    setTimeout (() => {
    
      this.invencivel = false
      imagemPersonagem.filter(INVERT);
    
    }, 600);
  
  }
  
  // Funçao de colisao das esmeraldas
  pegando(moedas){
    const precisao = 0.7;
    const diametroEsmeralda = moedas.largura * precisao;
    
    const pegando = collideRectCircle(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      moedas.x + moedas.largura / 2 + 15,
      moedas.y + moedas.altura / 2,
      diametroEsmeralda);
        // circle(moedas.x + moedas.largura/2+15, moedas.y + moedas.altura/2, moedas.largura*precisao);
    
    return pegando;
  }
  
  // Funçao de colisao do inimigo
  colidindo(inimigo) {
    if(this.invencivel){
      return false
    }
    const precisao = 0.7;
    const diametroInimigo = inimigo.largura * precisao;
    const colisao = collideRectCircle(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x + inimigo.largura / 2 + 15,
      inimigo.y + inimigo.altura / 2,
      diametroInimigo);
    
    // noFill();
    // rect(this.x + 10,
    // this.y + 20,
    // this.largura * precisao,
    // this.altura * precisao)

     // rect(this.x, this.y , this.largura * precisao, this.altura * precisao);
     // circle(inimigo.x + inimigo.largura/2+15, inimigo.y + inimigo.altura/2, inimigo.largura*precisao);
    return colisao;
  }  
  
}