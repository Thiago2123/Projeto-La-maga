class Pontuacao {
  constructor() {
    this.pontos = 0;
    this.esmeraldas = 0;
    this.esmeraldaAux = 0;
  }
  
  exibe() {
    textFont(fonteTelaInicial);
    textAlign(RIGHT);
    fill('#fff');
    textSize(30);
    text('pontos ' + parseInt(this.pontos), width - 30, 50);
    text('esmeraldas ' + this.esmeraldas, width - 30, 93);
  }
  
  adicionarPonto() {
    this.pontos = this.pontos + 0.2;
  
  }
  adicionarEsmeralda(){
    this.esmeraldas = this.esmeraldas + 1;
    this.esmeraldaAux ++;
    
  }
}