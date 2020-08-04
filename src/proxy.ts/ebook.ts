export class Ebbok {

    constructor(private _fileName: string) {

        this.load();
    }

    public load(): void {

        console.log('Loading the ebook', this._fileName);
    }

    public show(): void {

        console.log('Showing the ebook', this._fileName);
    }

    get fileName(): string {

        return this._fileName;
    }
}
