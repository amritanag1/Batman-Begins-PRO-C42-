const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
    
var umbrella;
var maxDrops = 100;
var drops = [];
var thunder;

function preload(){
    thunder1 = loadImage("Images/1.png");
    thunder2 = loadImage("Images/2.png");
    thunder3 = loadImage("Images/3.png");
    thunder4 = loadImage("Images/4.png");
}

function setup(){
    createCanvas(500,600);

    engine = Engine.create();
	world = engine.world;
   
    umbrella = new Umbrella(250,450);

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
    }
    
    //Engine.run(engine);
}

function draw(){
    background("black");
    Engine.update(engine);

    for (var i=0; i<maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }

    umbrella.display();
    
    if(frameCount%60===0){
        rand = Math.round(random(1,4));
        thunder = createSprite(250, 200, 50, 50);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break;
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        default: break;
    }

    thunder.lifetime=10;
    }
    
    
    drawSprites();    
}   

//function update(){
    //if(this.body.position.y > height){
        //Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    //}
//}