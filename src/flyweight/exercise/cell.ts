import { CellAttributes } from "./cell-attributes";

export class Cell {

    private _content!: string;

    constructor(private readonly row: number, private readonly col: number, private _attr: CellAttributes) { }


    set content(value: string) {

        this._content = value;
    }

    get attr(): CellAttributes {

        return this._attr;
    }

    set attr(value: CellAttributes) {

        this._attr = value;
    }


    public render(): void {

        console.log(`(${this.row}, ${this.col}: ${this.content} `);

    }
}
