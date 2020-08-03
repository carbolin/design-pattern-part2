import { Artefact } from "./artefact";

export class StandardIcon implements Artefact {

    constructor(private name: string) { }

    render(): string {

        return `%s %s %s ${this.name}`;
    }

}
