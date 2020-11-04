class Jogo {
  constructor() {
    this.velocidadeMaximaInimigo = 50;
    
      if(width < larguraCelular){
        this.larguraPersonagem = 15;
        this.alturaPersonagem =  55;
        this.variacaoY = 25;
        
        this.larguraInimigo = 36;
        this.alturaInimigo = 36;
        // divide tudo por 2 ae \/
        this.larguraInimigoVoador = 50;
        this.alturaInimigoVoador = 70;
        
        this.larguraInimigoGrande = 158;
        this.alturaInimigoGrande = 158;
        
       }else {
        this.larguraPersonagem = 30;
        this.alturaPersonagem =  110;  
        this.variacaoY = 50;
        
        this.larguraInimigo = 72;
        this.alturaInimigo = 72;
         
        this.larguraInimigoVoador = 100;
        this.alturaInimigoVoador = 75;
         
        this.larguraInimigoGrande = 200;
        this.alturaInimigoGrande = 200;
       }
    this.mapa = fita.mapa;
    this.indice = Math.floor( Math.random() * (0 - (this.mapa.length)) + (this.mapa.length));
    
  }

  setup() {
    //console.log(this.larguraPersonagem, this.alturaPersonagem)
    cenario = new Cenario(layer1, layer2, layer3, layer4, layer5, 1, 2, 3, 4, 10);
    pontuacao = new Pontuacao();
    moeda = new Moeda(matrizMoeda, imagemMoeda, width - 50, 300, 40, 50, 16, 16, 10, 5);
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, this.variacaoY, this.larguraPersonagem, this.alturaPersonagem, 135, 220, 270);
    
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30, this.larguraInimigo, this.alturaInimigo, 104, 104, 10);
    
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, this.larguraInimigoVoador, this.alturaInimigoVoador, 200, 150, 10);
    
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, this.larguraInimigoGrande, this.alturaInimigoGrande, 400, 400, 15);

    inimigos.push(inimigo); //inimigo 0
    inimigos.push(inimigoVoador); //inimigo 1
    inimigos.push(inimigoGrande); //inimigo 2

  }

  keyPressed(key) {
    if (key === 'ArrowUp' && cenaAtual === 'jogo') {
      personagem.pula()
    }

    if (key === 'r' && cenaAtual === 'gameOver') {
      window.location.reload();
    }
  }

  draw() {
    cenario.exibe();
    cenario.move();

    moeda.exibe();
    moeda.move();

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    if(width > larguraCelular && inimigo.velocidade < this.velocidadeMaximaInimigo){
      inimigo.velocidade = Math.floor(linhaAtual.velocidade + parseInt(pontuacao.pontos) /9) ;
      
    }
    if(width < larguraCelular && inimigo.velocidade < this.velocidadeMaximaInimigo /2){
        inimigo.velocidade = Math.floor((linhaAtual.velocidade / 2) + parseInt(pontuacao.pontos) /9) ;
    }
    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
     this.indice = Math.floor( Math.random() * (0 - (this.mapa.length)) + (this.mapa.length));
      inimigo.aparece();
      console.log( inimigo.velocidade);
    }

    if (personagem.colidindo(inimigo)) {
      console.log('colidiu');
      vida.perdeVida();
      personagem.tornarInvencivel();
      somDano.setVolume(0.7);
      somDano.play();
      if (vida.vidas === 0) {
        cenaAtual = 'gameOver';
        somDoJogo.stop();
      }
    }

    if (personagem.pegando(moeda)) {
      moeda.x = -width;
      pontuacao.adicionarEsmeralda();
      somColeta.play();
      somColeta.setVolume(0.5);
      console.log('esmeraldou ' + pontuacao.esmeraldaAux);
      
      if (pontuacao.esmeraldaAux === 3) {
        vida.ganhaVida();
        somGanharvida.setVolume(0.5);
        somGanharvida.play();
        pontuacao.esmeraldaAux = 0;
        console.log('vidou');
      }
    }
  }
}