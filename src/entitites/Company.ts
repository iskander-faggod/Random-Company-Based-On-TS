import * as faker from "faker";
import {IMap} from "./Map";

export default class Company implements IMap{
    companyName: string;
    catchPhrase: string;
    _location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this._location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            <h1>Company with name - ${this.companyName}</h1>
            <h3>${this.catchPhrase}</h3>`;
    }

    getLocationLatParam(): number {
        return this._location.lat;
    }

    getLocationLngParam(): number {
        return this._location.lng;
    }
}