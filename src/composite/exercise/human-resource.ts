import { Resource } from "./resource";

export class HumanResource implements Resource {

    deploy(): void {

        console.log('Deploying a human resource');
    }

}
