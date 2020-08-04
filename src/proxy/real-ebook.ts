import { Ebook } from "./ebook";

export class RealEbook implements Ebook {

    constructor(public readonly fileName: string) {

        this.load();
    }

    private load(): void {

        console.log('Loading the ebook', this.fileName);
    }

    public show(): void {

        console.log('Showing the ebook', this.fileName);
    }

}
