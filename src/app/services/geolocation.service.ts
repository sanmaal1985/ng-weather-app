import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { SettingsService } from './settings.service';
import { GeolocationObject } from '../models/geolocation-object.model';

@Injectable()
export class GeolocationService {

    geolocation$: Subject<GeolocationObject> = new Subject<GeolocationObject>();

    constructor(private httpClient: HttpClient, private settings: SettingsService) { }

    getPosition() {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (success: Position) => {
                    this.setGeolocation({ lat: success.coords.latitude, lon: success.coords.longitude });
                },
                () => this.getByIp()
            );
        }
    }

    private setGeolocation(geolocation: GeolocationObject) {
        this.geolocation$.next(geolocation);
    }

    private getByIp() {
        this.httpClient.get(this.settings.getGeolocationApiUrl()).subscribe((success: GeolocationObject) => {
            this.setGeolocation({ lat: success.lat, lon: success.lon});
        });
    }
}
