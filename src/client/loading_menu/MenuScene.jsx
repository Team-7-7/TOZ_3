import {CST} from "./CST.jsx";
import "../loginform.css";

export class Menu extends Phaser.Scene {
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
   
    }

    init(data){
        this.message = data.message;
    }

    preload(){ 
        this.load.image("background1" , "/assets/castle.png") 
        
    }
    

    create(){
        let bg1 = this.add.image( 400, 300, "background1");
      
       

        let scaleX = this.scale.width / bg1.width;
        let scaleY = this.scale.height / bg1.height;
        let scale = Math.max(scaleX, scaleY);
    
        bg1.setScale(scale);
        
        
        bg1.setPosition(this.scale.width / 2, this.scale.height / 2);

        this.text = this.add.text(0, 0, this.message, {fontFamily:'p-script', fontSize: '32px', color: 'white'});



        this.input.keyboard.on('keydown-ENTER', () => {
            this.scene.start(CST.SCENES.LEVEL1);
        })
    }
}