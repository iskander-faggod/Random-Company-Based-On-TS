import User from "./entitites/User";
import Company from "./entitites/Company";
import Map from "./entitites/Map";

const newUser = new User();
const newCompany = new Company()
const newMap = new Map('map');
newMap.addMarker(newUser);
newMap.addMarker(newCompany);
console.log(newMap)



