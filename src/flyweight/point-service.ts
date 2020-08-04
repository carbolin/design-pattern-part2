import { PointIconFactory } from "./point-icon-factory";
import { Point } from "./point";
import { PointType } from "./point-icon";

export class PointService {

    constructor(private factory: PointIconFactory) { }

    public getPoints(): Point[] {

        const points: Point[] = [
            new Point(1, 2, this.factory.getPointIcon(PointType.CAFE)),
            new Point(3, 4, this.factory.getPointIcon(PointType.HOSPITAL)),
            new Point(5, 6, this.factory.getPointIcon(PointType.RESTAURANT))
        ];

        return points;
    }


}