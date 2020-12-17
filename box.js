class Box extends BaseClass {
    constructor(x, y, width, height){
        var options = {
            restitution:0,
            friction:10,
            density:0
        }
      super(x,y,width,height,options);
      this.Visiblity = 255;
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity >  -105){
        score++;
      }
    }

  display(){
    if(this.body.speed < 3){
      fill("blue");
      stroke("black");
      strokeWeight(3);
      rect(this.body.position.x,this.body.position.y,this.width,this.height);
      super.display();
    }
    else{
      World.remove(world,this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      pop();
  }
}

  };
  