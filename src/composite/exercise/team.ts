import { Resource } from "./resource";
import { Teamable } from "./teamable";

export class Team extends Teamable implements Resource {

    deploy(): void {

        for (const comp of this.components)

            comp.deploy();

    }

}
