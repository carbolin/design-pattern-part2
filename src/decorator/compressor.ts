import { Stream } from "./stream";

export class Compressor implements Stream {

    constructor(private stream: Stream) { }

    write(data: string): void {

        const compressed = this.compress(data);
        this.stream.write(compressed);
    }

    private compress(data: string) {

        return data.substring(2, 4);
    }

}
