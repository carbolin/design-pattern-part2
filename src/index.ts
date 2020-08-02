import { Shape } from "./composite/shape";
import { Group } from "./composite/group";
import { HumanResource } from "./composite/exercise/human-resource";
import { Truck } from "./composite/exercise/truck";
import { Team } from "./composite/exercise/team";

// Composite Pattern Exercise

const human1 = new HumanResource();
const human2 = new HumanResource();
const truck1 = new Truck();
const subTeam1 = new Team();
subTeam1.add(human1);
subTeam1.add(human2);
subTeam1.add(truck1);

const human3 = new HumanResource();
const human4 = new HumanResource();
const truck2 = new Truck();
const subTeam2 = new Team();
subTeam2.add(human3);
subTeam2.add(human4);
subTeam2.add(truck2);
subTeam2.deploy();

const team = new Team();

team.add(subTeam1);
team.add(subTeam2);
// team.deploy();


// Composite Pattern

// const group1 = new Group();
// const shape1 = new Shape();
// const shape2 = new Shape();

// group1.add(shape1);
// group1.add(shape2);

// const group2 = new Group();
// group2.add(group1);
// group2.render();