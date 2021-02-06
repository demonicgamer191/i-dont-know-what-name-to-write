const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var vbox1,vbox2,vbox3,vbox4,vbox5,vbox6;
var xbox1,xbox2,xbox3,xbox4,xbox5,xbox6,xbox7,xbox8;
var ball1;
var rope;

function setup(){
    var canvas = createCanvas(3000,800);
   
    engine = Engine.create();

    world = engine.world;


    ground = new Ground(600,600,1200,20);
box1=new Box(900,100,70,70);
box2=new Box(900,100,70,70);
box3=new Box(900,100,70,70);
box4=new Box(900,100,70,70);
box5=new Box(900,100,70,70);
box6=new Box(900,100,70,70);

vbox1=new Box(800,100,70,70);
vbox2=new Box(800,100,70,70);
vbox3=new Box(800,100,70,70);
vbox4=new Box(800,100,70,70);
vbox5=new Box(800,100,70,70);
vbox6=new Box(800,100,70,70);

xbox1=new Box(700,100,70,70);
xbox2=new Box(700,100,70,70);
xbox3=new Box(700,100,70,70);
xbox4=new Box(700,100,70,70);
xbox5=new Box(700,100,70,70);
xbox6=new Box(700,100,70,70);
xbox7=new Box(700,100,70,70);
xbox8=new Box(700,100,70,70);

ball1=new Ball(200,200,80,80)

rope=new SlingShot(ball1.body,{x:500,y:50});
}

function draw(){

   
    background("blue"); 
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    vbox1.display();
    vbox2.display();
    vbox3.display();
    vbox4.display();
    vbox5.display();
    vbox6.display();


    xbox1.display();
    xbox2.display();
    xbox3.display();
    xbox4.display();
    xbox5.display();
    xbox6.display();
    xbox7.display();
    xbox8.display();

    ball1.display();
    rope.display();
}

function mouseDragged(){

        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});

}


