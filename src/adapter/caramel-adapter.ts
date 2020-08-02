import { Filter } from "./filter";
import { Image } from "./image";
import { CaramelFilter } from "./avaFilter/caramel-filter";

export class CaramelAdapter implements Filter {

    constructor(private filter: CaramelFilter) { }

    apply(image: Image): void {

        this.filter.init();
        this.filter.render(image);

    }

}
