import { Injectable } from '@angular/core';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const GEOLOCATION_API_URL = 'http://ip-api.com/json';
const APP_TITLE = 'Weather Forecast App';

@Injectable()
export class SettingsService {
    constructor() { }

    getApiUrl() {
        return API_URL;
    }

    getAppTitle() {
        return APP_TITLE;
    }

    getGeolocationApiUrl() {
        return GEOLOCATION_API_URL;
    }
}
