class Drop{
    constructor(x,y){
        var options = {
            //isStatic : true,
            //restitution : 1,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,10, options);
        //this.x = x;
        //this.y = y;
        this.r = 10;

        World.add(world, this.body);
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
        }
    }
    

    display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        //otate(angle);
        //strokeWeight(5);
        //stroke(73,255,233);
        //fill();
        fill("blue");
        ellipse(0,0,this.r,this.r);
        pop();
      }
}