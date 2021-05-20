//Code for game ||CYBERWARS||
//Developed by Ainesh Jai Wuppuluri

var Image1Scene1 , Image2Scene1 , Image3Scene1 , Image4Scene1 ;

var ImageSprite1 , ImageSprite2 , ImageSprite3 , ImageSprite4 ; 

var Ui1 ;


function preload () {

    Image1Scene1  = loadImage ( "Art/Future.jpg" ) ; 

    Image2Scene1  = loadImage ( "Art/Scene1Part2.jpg" ) ;

    Image3Scene1  = loadImage ( "Art/Scene1Part3.jpg" ) ;

    Image4Scene1  = loadImage ( "Art/Scene1Part4.jpg" ) ;

}

function setup () {

    var canvas = createCanvas(windowWidth , windowHeight) ; 

    ImageSprite4 = createSprite (600 , 340 , windowWidth , windowHeight) ;

    ImageSprite4 . addImage (Image4Scene1) ;

    ImageSprite4.scale = 1 ; 

    ImageSprite4 . lifetime = 400 ;



    ImageSprite3 = createSprite (windowWidth/2 , windowHeight/2 , 600 , windowHeight) ;

    ImageSprite3 . addImage (Image3Scene1) ; 

    ImageSprite3. scale  = 0.75 ; 

    ImageSprite3 . lifetime = 300 ;



    ImageSprite2 = createSprite (windowWidth / 2 , 200  ,width,height) ;

    ImageSprite2 . addImage (Image2Scene1) ; 

    ImageSprite2 . scale = 1 ; 

    ImageSprite2 . lifetime = 200 ; 



    ImageSprite1 = createSprite (windowWidth/2 , 200 , windowHeight/2 , windowHeight) ;

    ImageSprite1 . addImage (Image1Scene1) ; 

    ImageSprite1 . scale = 1; 

    ImageSprite1 . lifetime = 100 ;

   

}

function draw () { 
     
    background ("black") ;
    
    if(frameCount>400) {
      fill("green")
      text( "CyberWars" ,windowWidth / 2 , windowHeight / 2) ;
      Ui1=new UI1();
      
    }
   
   
    



    drawSprites () ;
   

   
}