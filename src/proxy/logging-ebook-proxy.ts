import { RealEbook } from "./real-ebook";
import { Ebook } from "./ebook";

export class LoggingEbookProxy implements Ebook {

    private ebook: RealEbook | null = null;

    constructor(public readonly fileName: string) { }

    show() {

        if (this.ebook === null)
            this.ebook = new RealEbook(this.fileName);

        console.log('Logging...');

        this.ebook.show();
    }
}
