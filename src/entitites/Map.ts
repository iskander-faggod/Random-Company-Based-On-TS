import User from "./User";
import Company from "./Company";

export default class Map {
    private selector: string;
    private googleMap: google.maps.Map;

    constructor(newSelector: string) {
        this.selector = newSelector;
        this.googleMap = new google.maps.Map(document.getElementById(this.selector), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addUserMarker(user: User): void {
        new google.maps.Marker({
            map : this.googleMap,
            position: {
                lat: user.getLocationLatParam(),
                lng : user.getLocationLngParam()
            }
        })
    }

    addCompanyMarker(company: Company): void {

    }
}