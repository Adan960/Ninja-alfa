var gameState = "load";
var ninjaGirl;
var ninjaGirlImg,ninjaGirlParadaEsquerdaImg;
var backgroundImg;
var ninjaGirlCorrendoDireita;
var ninjaGirlCorrendoEsquerda;
var ninjaGirlAtacandoDireita,ninjaGirlAtacandoEsquerda;
var pos = "direita";
var invisibleGround;
var ninjaGirlJumpDireita, ninjaGirlJumpEsquerda;
var ninjaGirlMorrendoD;
var girlMorta, girlMortaImg;
var adaga;
var adagaImg;
var contA;
var contB;
var contC;
var contImg;
var contAdaga = 3;
var contaAdaga;
var adagaE;
var vida = 50;
var vidab = vida;
var placar;
var placarImg, placarBoy;
var seta, setaImg;
var dano;
var morreuImg;
var morreu;
var contImg;
var vidaPlacar;
var vidaPlacarR;
var backgroundL, fundo, fundoB;
var b_start, b_startImg;
var golpe = 0;
var golpe_c;
var ningagirlpulandoatacandodireitaImg, ningagirlpulandoatacandoesquerdaImg;
var boyparadodireita, boyparadoesquerda;
var boycorrendodireita, boycorrendoesquerda;
var boyjumpdireita,boyjumpesquerda;
var boyatacandodireita, boyatacandoesquerda;
var boypulandoatacandodireita, boypulandoatacandoesquerda;
var botaoboy, botaoboyImg;
var botaogirl, botaogirlImg;
var genero;
var letra, letraImg;
var teste;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

function preload()
{
  ninjaGirlImg = loadImage("./Sprites/girlparada.gif");
  backgroundImg = loadImage("./Sprites/Novo Projeto (4).png");
  ninjaGirlCorrendoEsquerda = loadImage("./Sprites/girlcorrendoesquerda.gif");
  ninjaGirlCorrendoDireita = loadImage("./Sprites/girlcorrendodireita.gif");
  ninjaGirlParadaEsquerdaImg = loadImage("./Sprites/girlparadaesquerda.gif");
  ninjaGirlAtacandoDireita = loadImage("./Sprites/girlatacandodireita.gif");
  ninjaGirlJumpDireita = loadImage("./Sprites/Jump.png");
  ninjaGirlJumpEsquerda = loadImage("./Sprites/JumpE.png");
  adagaImg = loadImage("./Sprites/Kunai.png");
  placarImg = loadImage("./Sprites/Placar.png");
  ninjaGirlMorrendoD = loadImage("./Sprites/girlmorrendodireita.png");
  setaImg = loadImage("./Sprites/seta.png");
  girlMortaImg = loadImage("./Sprites/girlmorta.png");
  morreuImg = loadImage("./Sprites/morreu.png");
  contImg = loadImage("./Sprites/cont.png");
  backgroundL = loadImage("./Sprites/Fundo.gif");
  ningagirlpulandoatacandodireitaImg = loadImage("./Sprites/girlatacandopulandodireita.png");
  ninjaGirlAtacandoEsquerda = loadImage("./Sprites/girlatacandoesquerda.gif");
  ningagirlpulandoatacandoesquerdaImg = loadImage("./Sprites/girlatacandopulandodesquerda.png");
  boyparadodireita = loadImage("./Sprites/boyparado.gif");
  boyparadoesquerda = loadImage("./Sprites/boyparadoesquerda.gif");
  boycorrendodireita = loadImage("./Sprites/boycorrendodireita.gif");
  boycorrendoesquerda = loadImage("./Sprites/boycorrendodesquerda.gif");
  boyjumpdireita = loadImage("./Sprites/boyjumpdireita.png");
  boyjumpesquerda = loadImage("./Sprites/boyjumpesquerda.png");
  boyatacandodireita = loadImage("./Sprites/boyatacandodireita.gif");
  boyatacandoesquerda = loadImage("./Sprites/boyatacandoesquerda.gif");
  boypulandoatacandodireita = loadImage("./Sprites/boypulandoatacando.png");
  boypulandoatacandoesquerda = loadImage("./Sprites/boypulandoatacandoesquerda.png");
  placarBoy = loadImage("./Sprites/Placarboy.png");
  letraImg = loadImage("./Sprites/letra.gif");
  fundoB = loadImage("./Sprites/fundo perfeito!.gif");
  botaoboyImg = loadImage("./Sprites/botaoboy.png");
  botaogirlImg = loadImage("./Sprites/girlparada.png");
  //teste = loadSound('espada.mp3');


  
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

  conttime = createSprite(1,1,1,1);
  conttime.visible = false;

  golpe_c = createSprite(10,10,10,10);
  //golpe_c.visible = false;

  botaoboy = createSprite(windowWidth/3.5, windowHeight/2,20,20);
  botaoboy.addImage(botaoboyImg);
  botaoboy.scale = 0.7;

  botaogirl = createSprite(windowWidth/1.5, windowHeight/2,20,20);
  botaogirl.addImage(botaogirlImg);
  botaogirl.scale = 0.7;

	ninjaGirl = createSprite(windowWidth/5, windowHeight/2,20,20);
	ninjaGirl.addImage(ninjaGirlImg);
	ninjaGirl.scale = 0.5;
  ninjaGirl.depth = 2;

  letra = createSprite(windowWidth/2, windowHeight/2.6,20,20)
  letra.addImage(letraImg);
  letra.scale = 0.5;

	World.add(world, ninjaGirl);

  morreu = createSprite(windowWidth/2, windowHeight/2,20,20);
  morreu.addImage(morreuImg);
  morreu.depth = 10;

	invisibleGround = createSprite(width/2,height/1.19,width,125);
	//invisibleGround.visible = false;

  contaAdaga = createSprite(100,240,10,10);
  contaAdaga.visible = false;

  placar = createSprite(349,80,20,20);
  placar.scale = 0.8;
  placar.depth = 2;

  girlMorta = createSprite(ninjaGirl.x,ninjaGirl.y,10,10);

  seta = createSprite(ninjaGirl.x, ninjaGirl.y - 20,10,10);
  seta.depth = 1;

  vidaPlacar = createSprite(313,64,500,65);
  vidaPlacar.shapeColor = "green";

  vidaPlacarR = createSprite(434,64,500,65);
  vidaPlacarR.shapeColor = "red";
  vidaPlacarR.depth = 0;

  contA = createSprite(210,114,10,10);
  contA.addImage(contImg);

  contB = createSprite(247,114,10,10);
  contB.addImage(contImg);

  contC = createSprite(284,114,10,10);
  contC.addImage(contImg);

  dano = createSprite(800,600,80,80);

  fundo = createSprite(windowWidth/2, windowHeight/2,1920,1080);
  fundo.addImage(backgroundL);
  fundo.scale = windowWidth/1920;
  fundo.depth = 0;

  //mouse = createSprite(World.mouseX,World.mouseY,200,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ninjaGirl.velocityY += 1.85;
  ninjaGirl.collide(invisibleGround);
  background(backgroundImg);

  drawSprites();



  if(vida <= 0){
    gameState = "end";
  }
  if(gameState == "load"){
    morreu.visible = false;
    vidaPlacar.visible = false;
    vidaPlacarR.visible = false;
    contA.visible = false;
    contB.visible = false;
    contC.visible = false;
    placar.visible = false;
    dano.visible = false;
    contaAdaga.visible = false;
    invisibleGround.visible = false;
    seta.visible = false;
    ninjaGirl.visible = false;
    contaAdaga.visible = false;
    letra.visible = true;
    botaoboy.visible = false;
    botaogirl.visible = false;
    girlMorta.visible = false;


    if(keyDown("ENTER")){
      gameState = "escolha";
    }
}
  if(gameState == "end"){
    placar.visible = false;
    ninjaGirl.addImage(ninjaGirlMorrendoD);
    girlMorta.addImage(girlMortaImg);
    girlMorta.scale = 0.5;
    girlMorta.velocityY = -7;
    girlMorta.x = ninjaGirl.x;
    girlMorta.visible = true;
    morreu.visible = true;
    vidaPlacar.visible = false;
    vidaPlacarR.visible = false;
    contA.visible = false;
    contB.visible = false;
    contC.visible = false;
    botaogirl.visible = false;

  }
  
  if(gameState == "escolha"){
    letra.visible = false;
    fundo.addImage(fundoB);
    botaoboy.visible = true;
    botaogirl.visible = true;
    if(mousePressedOver(botaoboy)){
      gameState = "play";
      genero = "boy";
    }
    if(mousePressedOver(botaogirl)){
      gameState = "play";
      genero = "girl";
    }
  }

  if(gameState == "play"){
  
  seta.x = ninjaGirl.x
  seta.y = ninjaGirl.y - 150;
  seta.addImage(setaImg);
  seta.scale = 0.3;

  fundo.visible = false;
  botaoboy.visible = false;
  girlMorta.visible = false;
  ninjaGirl.visible = true;
  dano.visible = true;
  placar.visible = true;
  vidaPlacar.visible = true;
  vidaPlacarR.visible = true;
  seta.visible = true;
  letra.visible = false;
  botaogirl.visible = false;

  if(genero == "girl"){
    placar.addImage(placarImg);
  }
  else{
    placar.addImage(placarBoy);
  }
  if(golpe == 1 && pos == "direita"){
    if(ninjaGirl.y > height/1.7){
    if(genero == "girl"){
      ninjaGirl.addImage(ninjaGirlAtacandoDireita);
    }
    else{
      ninjaGirl.addImage(boyatacandodireita);
    }
    }
    if(ninjaGirl.y < height/1.7){
      if(genero == "girl"){
        ninjaGirl.addImage(ningagirlpulandoatacandodireitaImg);
      }
      else{
        ninjaGirl.addImage(boypulandoatacandodireita);
      }
    }
      }
  
  if(golpe == 1 && pos == "esquerda"){
    if(ninjaGirl.y > height/1.7){
      if(genero == "girl"){
        if(genero == "girl"){
          ninjaGirl.addImage(ninjaGirlAtacandoEsquerda);
        }
      }
      else{
        ninjaGirl.addImage(boyatacandoesquerda);
      }
      if(ninjaGirl.y < height/1.7){
        ninjaGirl.addImage(ningagirlpulandoatacandoesquerdaImg)
      }
    }
    else{
      ninjaGirl.addImage(boypulandoatacandoesquerda)
    }
  }

  if(ninjaGirl.collide(dano)){
    vida = vida -1;
  }
  if(golpe == 3){
    ninjaGirl.velocityX = -20;
  }

  if(contAdaga > 2){
    contC.visible = true;
  }
  else{
    contC.visible = false;
  }
  if(contAdaga > 1){
    contB.visible = true;
  }
  else{
    contB.visible = false;
  }
  if(contAdaga > 0){
    contA.visible = true;
  }
  else{
    contA.visible = false;
  }
  if(contAdaga < 3){
  
    contaAdaga.velocityX = 1;
  }
  else{
    contaAdaga.velocityX = 0;
  }
  if(contaAdaga.x > 300){
    contAdaga++;
    contaAdaga.x = 100;
  }
  if(keyDown("w") && ninjaGirl.y >= height/1.7 && golpe == 0){
	ninjaGirl.velocityY = -30;
  }
  
  if(ninjaGirl.y <= height/1.7 && pos != "direita" && golpe == 0){
    if(genero == "girl"){
      ninjaGirl.addImage(ninjaGirlJumpEsquerda);
    }
    else{
      ninjaGirl.addImage(boyjumpesquerda);
    }
  }
  if(ninjaGirl.y <= height/1.7 && pos != "esquerda" && golpe == 0){
    if(genero == "girl"){
      ninjaGirl.addImage(ninjaGirlJumpDireita);
    }
    else{
      ninjaGirl.addImage(boyjumpdireita);
    }
  }

  if(keyDown("A") && golpe == 0){
    ninjaGirl.position.x = ninjaGirl.position.x -10;
	  pos = "esquerda";
  if(ninjaGirl.y > height/1.7){ 
    if(genero == "girl"){
    ninjaGirl.addImage(ninjaGirlCorrendoEsquerda);
  }

else{
    ninjaGirl.addImage(boycorrendoesquerda);
  } 
  }
  }
  if(keyDown("D") && pos != "ataque" && golpe == 0){
    ninjaGirl.position.x = ninjaGirl.position.x +10;
    pos = "direita";
    if(ninjaGirl.y > height/1.7){
      if(genero == "girl"){
        ninjaGirl.addImage(ninjaGirlCorrendoDireita);
      }
    
    else{
        ninjaGirl.addImage(boycorrendodireita);
    }
    }
    }
  if(keyDown("O") && golpe == 0){

    golpe_c.velocityX = 1;
    golpe = 1;
    //teste.play();
  }

  if(golpe_c.x > 20){
    golpe = 0;
    golpe_c.x = 10
    golpe_c.velocityX = 0
  }

  if(keyDown("P") && contAdaga > 0 && pos == "direita" && golpe == 0){
    createAdagaD();
    contAdaga --;
    }
    if(keyDown("P") && contAdaga > 0 && pos == "esquerda"){
      createAdagaE();
      contAdaga --;
      }
  if(!keyDown("D") && !keyDown("A") &&  !keyDown("O") && !keyDown("W") && ninjaGirl.y > height/1.7 && golpe == 0 &&  pos == "direita" && vida > 0){
    if(genero == "girl"){
      ninjaGirl.addImage(ninjaGirlImg);
    }
	
  else{
      ninjaGirl.addImage(boyparadodireita);
  }
  }
  if(!keyDown("D") && !keyDown("A") &&  !keyDown("O") && !keyDown("W") && ninjaGirl.y > height/1.7 && golpe == 0 && pos == "esquerda" && vida > 0){
    if(genero == "girl"){
      ninjaGirl.addImage(ninjaGirlParadaEsquerdaImg);
    }
	
  else{
      ninjaGirl.addImage(boyparadoesquerda);
  }
  }
}
  vidaPlacar.position.x = vida*10 - 68;
  vidaPlacar.depth = 1;
  }
function windowResized() {
	resizeCanvas(windowWidth, windowHeight); 
}
function createAdagaD () {
  adaga = createSprite(100,100,50,50);
  adaga.addImage(adagaImg);
  adaga.velocityX = 17;
  adaga.x = ninjaGirl.x;
  adaga.y = ninjaGirl.y;
  adaga.lifetime = 100;
}
function createAdagaE () {
  adagaE = createSprite(100,100,50,50);
  adagaE.addImage(adagaImg);
  adagaE.velocityX = -17;
  adagaE.x = ninjaGirl.x;
  adagaE.y = ninjaGirl.y;
  adagaE.lifetime = 100;
  adagaE.rotation = 180;
}
