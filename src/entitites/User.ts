// @ts-ignore
import faker from 'faker';
import IUser from "../interfaces/IUser";

export default class User {
    private readonly name: string;
    private _location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.name.findName();
        this._location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    getUserName(): string {
        return this.name;
    }

    getLocationLatParam(): number {
        return this._location.lat;
    }

    getLocationLngParam(): number {
        return this._location.lng;
    }

    get location(){
        return this._location;
    }

    set location(value: { lat: number; lng: number }) {
        this._location = value;
    }


}