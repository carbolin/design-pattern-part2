export class CellAttributes {

    private _content!: string;
    private _fontFamily!: string;
    private _fontSize!: number;
    private _isBold!: boolean;

    get content(): string {

        return this._content;
    }

    set content(value: string) {

        this._content = value;
    }

    get fontFamily(): string {

        return this._fontFamily;
    }

    set fontFamily(value: string) {

        this._fontFamily = value;
    }

    get fontSize(): number {

        return this._fontSize;
    }

    set fontSize(value: number) {

        this._fontSize = value;
    }

    get isBold(): boolean {

        return this._isBold;
    }

    set isBold(value: boolean) {

        this._isBold = value;
    }

}
