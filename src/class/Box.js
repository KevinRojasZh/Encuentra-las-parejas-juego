class Box {
    #col
    #row
    #color
    #open
    #free

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

    
}
export default Box;