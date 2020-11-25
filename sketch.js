var database;
var dog,dogI,dogHappyI;
var foodStock,foodSprite;
var addFood,feedFood;

function preload(){

  dogHappyI = loadImage("images/dogImg1.png")
    
}

function setup() {
  createCanvas(1000, 700);
  
  database = firebase.database();

  dog = createSprite(800,400)
  dog.addImage(dogHappyI)
  dog.scale = 0.2;

  feedFood = createButton('Feed the dog')
  feedFood.position(800,20)

  addFood = createButton('Add food')
  addFood.position(700,20)

  foodSprite = new Food();
  
}

function draw() {  
  background(7, 171, 122)

  drawSprites();

  textSize(20)
  fill("yellow")
  text("Last fed = ",300,25)

  foodSprite.display();
  foodSprite.getFoodStock();

}

