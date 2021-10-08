// @ts-ignore
import faker from 'faker';
import {IMap} from "./Map";

export default class User implements IMap{
    private readonly name: string;
    _location: {
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

    markerContent(): string {
        return `<h1>User with name - ${this.name}</h1>`;
    }

    getLocationLatParam(): number {
        return this._location.lat;
    }

    getLocationLngParam(): number {
        return this._location.lng;
    }
}