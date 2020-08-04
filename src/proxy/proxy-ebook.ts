import { Ebook } from "./ebook";
import { RealEbook } from "./real-ebook";

export class EbookProxy implements Ebook {

    private ebook: RealEbook | null = null;

    constructor(public fileName: string) { }

    show(): void {

        if (this.ebook === null)
            this.ebook = new RealEbook(this.fileName);

        this.ebook.show();
    }

}