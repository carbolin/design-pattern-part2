import { Artefact } from "./artefact";

export class MainIcon implements Artefact {

    constructor(private icon: Artefact) { }

    render(): string {

        const mainIcon: string = ', [Main]';

        return this.icon.render() + mainIcon;

    }

}
