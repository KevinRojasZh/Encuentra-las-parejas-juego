class Box {
    #col
    #row
    #color
    #open
    #free
    #element

    constructor(col,row,color){
        this.#col = col;
        this.#row = row;
        this.#color = color;
        this.#open = false;
        this.#free = true;
    }
    get col(){
        return this.#col;
    };

    get row(){
        return this.#row;
    };
    get open(){
        return this.#open
    }
    get color(){
        return this.#color
    }
    get element(){
        return this.#element
    }
    get free(){
        return this.#free
    }

    set element(element){
        this.#element = element;
    }
    set open(newValue){
        this.#open = newValue
    }
    set free(newValue){
        this.#free = newValue
    }

    addEventOnClick(){
        if (this.#element){
            this.#element.addEventListener( "click",(e) => {
                if(!this.#open){
                    this.#open = true;
                    this.#element.style.backgroundColor = this.#color;
                } return false;

            });
        }
    }

    resetColor(){
        this.#element.style.backgroundColor = 'black';
        this.#open = false;

    }
}
export default Box;