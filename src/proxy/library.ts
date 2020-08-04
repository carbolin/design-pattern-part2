import { Ebook } from "./ebook";

export class Library {

    private ebooks: Map<string, Ebook> = new Map<string, Ebook>();

    public add(ebook: Ebook): void {

        this.ebooks.set(ebook.fileName, ebook)
    }

    public openEbook(fileName: string): void {

        if (this.ebooks.has(fileName))
            this.ebooks.get(fileName)?.show();

        else console.log('Ebook with ', fileName, 'does not exit');
    }

}
