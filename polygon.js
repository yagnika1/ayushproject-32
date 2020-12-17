class Polygon{
    constructor(x,y,r){
        var options = {
            restitution:0,
            friction: 1,
            density: 6
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("polygon.png");
        this.trajectory = [];
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){
        var polypos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(polypos.x,polypos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.r,this.r,40,40);
        pop();
    }
}