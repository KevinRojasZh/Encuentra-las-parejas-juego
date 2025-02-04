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

    set element(element){
        this.#element = element;
    }
    set open(newValue){
        this.#open = newValue
    }
    set free(newValue){
        this.#free = newValue
    }

    addEverOnClick(){
        if (this.#element){
            this.#element.addEventListener( "click",(e) => {
                Box.open = true;
                this.#element.style.backgroundColor = this.#color;
            });
        }
    }
}
export default Box;