class Ball{
    constructor(x,y,r){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }
    display(){

    var ballpos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(ballpos.x,ballpos.y);
    rotate(angle);
    fill("yellow");
    ellipseMode(RADIUS);
    ellipse(ballpos.x,ballpos.y,this.r,this.r);
    pop()
}
}