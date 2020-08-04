import { PointIcon, PointType } from "./point-icon";

export class PointIconFactory {

    private icons: Map<PointType, PointIcon> = new Map<PointType, PointIcon>();

    public getPointIcon(type: PointType): PointIcon {
        if (!this.icons.has(type)) {

            const icon = new PointIcon(type, '"-"');

            this.icons.set(type, icon);
        }

        return this.icons.get(type)!;
    }
}