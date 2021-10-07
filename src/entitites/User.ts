// @ts-ignore
import faker from 'faker';
import IUser from "../interfaces/IUser";

export default class User implements IUser {
    name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.findName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }
}