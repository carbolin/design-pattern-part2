import { Stream } from "./stream";

export class CloudSTream implements Stream {

    write(data: string): void {

        console.log(`Writing ${data} to DB.`);

    }

}
