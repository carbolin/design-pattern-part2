import { Component } from "./component";

export class Group implements Component {

    private _components: Component[] = [];


    add(comp: Component) {

        this._components.push(comp);
    }

    render(): void {

        for (const component of this._components)
            component.render();

    }


}