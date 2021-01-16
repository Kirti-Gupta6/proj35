var dog, happyDog, database, foodS;

function preload(){
  dogImg = loadImage("images/dogImg.png");
  hdogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250,250,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  var foodStock = database.ref('foodStock');
  foodStock.on("value", readStock);
}

function draw() {  
 background("coral");

    if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(hdogImg);
    }
    

  drawSprites();
  textSize (25);
  fill("purple");
  text("Press the UP arrow key to feed Yeontan milk!", 5,100);
  text("Food Remaining:"+ foodS,140,140);

  
}

function readStock(data){
  foodS = data.val();
 }

function writeStock(x){
  if(foodS > 0){
    database.ref('/').update({
    foodStock : x-1
     })
  }
  
}

