import { Artefact } from "./artefact";

export class ErrorIcon implements Artefact {

    constructor(private icon: Artefact) { }

    render(): string {

        const errorIcon: string = ', [Error]';

        return this.icon.render() + errorIcon;

    }

}
