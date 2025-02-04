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
}
export default Box;