import { Stream } from "./stream";

export class Encryptor implements Stream {

    constructor(private stream: Stream) { }

    write(data: string): void {

        const encrypted = this.encrypt(data);
        this.stream.write(encrypted);
    }

    private encrypt(data: string) {

        return '$(!§)**=()*';
    }

}
