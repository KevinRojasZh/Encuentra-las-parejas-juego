import Box from "./Box";
import { shuffleArray } from "../utils/utils.js"

class Game{
    #cols;
    #rows;
    #idElement;
    #boxes;

    constructor(cols,rows, idElement = 'game'){
        this.#cols =cols;
        this.#rows = rows;
        this.#idElement = idElement;
        this.#boxes = [];
        this.element = document.getElementById(idElement);
        this.createBoxes();
        this.printBoxes();
    }

    createBoxes(){
        let randomcolor = this.createRandomColor();

        for (let row = 0; row < this.#rows; row++) {
            for (let col = 0; col < this.#cols; col++){
                let color = randomcolor.shift()
                let box = new Box(col,row,color)
                this.#boxes.push(box)
            }
        }

    }

    createRandomColor(){
        let randomColor = []
        for (let index = 0; index < (this.#cols * this.#rows)/ 2; index++) {
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            let color = `rgb(${red}, ${green}, ${blue})`;
            randomColor.push(color);
            randomColor = [...randomColor, ...randomColor];
            shuffleArray(randomColor);
            return randomColor;
        }
    }

    printBoxes(){
        this.setDisplayTag();
        this.#boxes.map((box)=>{
            let newBox = document.createElement('div');
            newBox.classList.add('box');
            newBox.dataset.col = box.col;
            newBox.dataset.row = box.row;
            
            this.element.appendChild(newBox);



            


        })




    }
    setDisplayTag(){
        this.element.style.display = `grid`;
        this.element.style.gridTemplateColumns = `repeat(${this.#cols}, 1fr)`;
        this.element.style.gridTemplateRows = `repeat(${this.#rows}, 1fr)`;
    }
}
export default Game;