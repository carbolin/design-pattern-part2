export enum PointType {
    CAFE = "Cafe",
    HOSPITAL = "Hospital",
    RESTAURANT = "Restaurant"
}

export class PointIcon {

    constructor(private readonly _type: PointType, private readonly _icon: string) { }

    get type(): PointType {

        return this._type;
    }
}