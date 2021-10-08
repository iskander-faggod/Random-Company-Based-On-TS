import User from "./User";
import Company from "./Company";

//Instructions to other classes how to be argument for 'addMarker'
export interface IMap {
    _location: {
        lat: number;
        lng: number;
    }
    markerContent(): string;
    getLocationLatParam(): number;
    getLocationLngParam(): number;
}

export default class Map {
    private readonly selector: string;
    private readonly googleMap: google.maps.Map;

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

    addMarker(mapper: IMap): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mapper.getLocationLatParam(),
                lng: mapper.getLocationLngParam()
            }
        })

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mapper.markerContent()
            })

            infoWindow.open(this.googleMap, marker);
        })
    }
}