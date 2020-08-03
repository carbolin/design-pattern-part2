import { Artefact } from "./artefact";
import { StandardIcon } from "./standard-icon";
import { ErrorIcon } from "./error-icon";
import { MainIcon } from "./main-icon";

export class Editor {

    public openProject(): void {

        const icons: Artefact[] = [

            new StandardIcon('Demo'),
            new ErrorIcon(new StandardIcon('Error')),
            new MainIcon(new StandardIcon('Main')),
            new StandardIcon('Email'),
            new ErrorIcon(new MainIcon(new StandardIcon('Bad Icon')))
        ];

        for (const icon of icons)
           console.log(icon.render());

    }

}
