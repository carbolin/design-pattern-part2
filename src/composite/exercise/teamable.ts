import { Resource } from "./resource";

export abstract class Teamable {

    protected components: Resource[] = [];

    public add(component: Resource): void {

        this.components.push(component);
    }

}

