class Cenario {
  constructor(layer1, layer2, layer3, layer4, layer5,
    vel1, vel2, vel3, vel4, vel5) {

    this.layer1 = layer1;
    this.layer2 = layer2;
    this.layer3 = layer3;
    this.layer4 = layer4;
    this.layer5 = layer5;

    this.vel1 = vel1;
    this.vel2 = vel2;
    this.vel3 = vel3;
    this.vel4 = vel4;
    this.vel5 = vel5;

    this.l1x1 = 0;
    this.l1x2 = width;

    this.l2x1 = 0;
    this.l2x2 = width;

    this.l3x1 = 0;
    this.l3x2 = width;

    this.l4x1 = 0;
    this.l4x2 = width;

    this.l5x1 = 0;
    this.l5x2 = width;
  }
  exibe() {
    image(this.layer1, this.l1x1, 0, width, height);
    image(this.layer1, this.l1x2, 0, width, height);
    image(this.layer2, this.l2x1, 0, width, height);
    image(this.layer2, this.l2x2, 0, width, height);
    image(this.layer3, this.l3x1, 0, width, height);
    image(this.layer3, this.l3x2, 0, width, height);
    image(this.layer4, this.l4x1, 0, width, height);
    image(this.layer4, this.l4x2, 0, width, height);
    image(this.layer5, this.l5x1, 15, width, height);
    image(this.layer5, this.l5x2, 15, width, height);

  }


  move() {

    this.l1x1 = this.l1x1 - this.vel1;
    this.l1x2 = this.l1x2 - this.vel1;
    if (this.l1x1 < -width) {
      this.l1x1 = width;
    }
    if (this.l1x2 < -width) {
      this.l1x2 = width;
    }

    this.l2x1 = this.l2x1 - this.vel2;
    this.l2x2 = this.l2x2 - this.vel2;
    if (this.l2x1 < -width) {
      this.l2x1 = width;
    }
    if (this.l2x2 < -width) {
      this.l2x2 = width;
    }

    this.l3x1 = this.l3x1 - this.vel3;
    this.l3x2 = this.l3x2 - this.vel3;
    if (this.l3x1 < -width) {
      this.l3x1 = width;
    }
    if (this.l3x2 < -width) {
      this.l3x2 = width;
    }

    this.l4x1 = this.l4x1 - this.vel4;
    this.l4x2 = this.l4x2 - this.vel4;
    if (this.l4x1 < -width) {
      this.l4x1 = width;
    }
    if (this.l4x2 < -width) {
      this.l4x2 = width;
    }

    this.l5x1 = this.l5x1 - this.vel5;
    this.l5x2 = this.l5x2 - this.vel5;
    if (this.l5x1 <= -width) {
      this.l5x1 = width;
    }
    if (this.l5x2 <= -width) {
      this.l5x2 = width;

    }
  }

}