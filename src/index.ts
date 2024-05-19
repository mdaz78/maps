import { Company } from "./Company";
import { Map } from "./Map";
import { User } from "./User";

const user = new User();
const company = new Company();

console.log(user);
console.log(company);

const mapDiv = document.getElementById("map") as HTMLElement;

export const map = new Map(mapDiv);
