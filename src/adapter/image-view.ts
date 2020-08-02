import { Filter } from "./filter";
import { Image } from "./image";

export class ImageView {

    constructor(private image: Image) { }

    previewImage(filter: Filter): void {

        filter.apply(this.image);
    }
    
}
