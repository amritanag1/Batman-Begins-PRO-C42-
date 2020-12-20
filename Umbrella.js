class Umbrella{
    constructor(x,y){
        var options = {
            isStatic : true,
            //restitution : 1,
            //friction : 0.1
        }
        this.body = Bodies.circle(x, y, 70, options);
        this.image = loadImage("Images/walking_1.png","Images/walking_2.png","Images/walking_3.png","Images/walking_4.png",
        "Images/walking_5.png","Images/walking_6.png","Images/walking_7.png","Images/walking_8.png");

        //this.x = x;
        //this.y = y;
        this.r = 70;

        World.add(world, this.body);
    }

    

    display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
        //push();
       //translate(pos.x, pos.y);
        //rotate(angle);
        //rectMode(CENTER);
        
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 200,200);
        //strokeWeight(5);
        //stroke(73,255,233);
        
        //ellipse(0,0,50,50);
        //pop();
      }
}