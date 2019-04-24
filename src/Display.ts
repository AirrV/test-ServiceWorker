
export class Display {

    private name: string
    public text: string

    constructor() {
        this.name = "Batman";
        this.text = "Hello " + this.name;
    }

    print(): string {
        return this.text
    }

}