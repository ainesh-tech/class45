class UI1  {

    constructor(){

        this.button = createButton('Start Game');
        this.button.position(windowWidth/2,windowHeight/2+20);
        this.button.style('background', 'lightgrey');    
    }
    hide(){
        this.button.hide();
    }
    display(){
        console.log(this.button);
        this.button.mousePressed(()=>{

          this.button.hide();
          console.log("PRessed");
        });
    }

}