import { Ebook } from "./ebook";
import { RealEbook } from "./real-ebook";

export class EbookProxy implements Ebook {

    private ebook!: RealEbook;

    constructor(public fileName: string) { }

    show(): void {

        if (this.ebook === undefined)
            this.ebook = new RealEbook(this.fileName);

        this.ebook.show();
    }

}