// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 var particle;
var ground;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.

}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
       boxes = new Box;
   }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(51);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
  // Use a for loop to show all the boxes
for(i=0; i<10; i++){
    boxes(this.boxes,this.trajectory[i][0],this.trajectory[i][1]);
}
ground = new Ground(200,359,10,400);
boxes = new Box(200,200,10,10);
particle = new Particle(200,200,10);

    boxes.display();
    practicle.display();
ground.display();

}

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.


    // add options such as friction and restitution. Experiment with the values
   
    // create your box using the function arguments
    // x - x-coordinate
    // y - y-coordinate
    // w - width of the box
    // h - height of the box



    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
    this.show = function () {
        push();
      pop();
  

       
    }


   