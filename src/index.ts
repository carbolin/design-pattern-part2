import { Shape } from "./composite/shape";
import { Group } from "./composite/group";

const group1 = new Group();
const shape1 = new Shape();
const shape2 = new Shape();

group1.add(shape1);
group1.add(shape2);

const group2 = new Group();
group2.add(group1);
group2.render();