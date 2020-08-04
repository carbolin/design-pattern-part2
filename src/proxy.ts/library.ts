import { Ebbok } from "./ebook";

export class Library {

    private ebooks: Map<string, Ebbok> = new Map<string, Ebbok>();

    public add(ebook: Ebbok): void {

        this.ebooks.set(ebook.fileName, ebook)
    }

    public openEbook(fileName: string): void {

        if (this.ebooks.has(fileName))
            this.ebooks.get(fileName)?.show();

        else console.log('Ebook with ', fileName, 'does not exit');

    }
}
