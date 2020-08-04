import { PointIcon } from "./point-icon";

export class Point {

    constructor(private x: number, private y: number, private icon: PointIcon) {

    }

    public draw() {

        console.log(`${this.icon.type} at (${this.x}, ${this.y})`);

    }
}