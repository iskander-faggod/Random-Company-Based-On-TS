import User from "./entitites/User";
import Company from "./entitites/Company";
import Map from "./entitites/Map";
import {Loader} from "@googlemaps/js-api-loader";

const newUser = new User();
const newCompany = new Company()
const newMap = new Map('map');
const loader = new Loader({
    apiKey: "AIzaSyB7uMXMmbG-scG6dVpwd_AHAL9XyZuyb-g",
    version: "weekly",
});

loader.load().then(() => {
     newMap.addUserMarker(newUser);
});

console.log(newMap)



