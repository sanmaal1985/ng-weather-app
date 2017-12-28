import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SettingsService } from './settings.service';
import { GeolocationService } from './geolocation.service';
import { GeolocationObject } from '../models/geolocation-object.model';

const FORECASTS_KEY = 'forecasts';
const API_KEY = '3aee9568a0e9cdac0d5751a170a5d885';

@Injectable()
export class ForecastService {

    forecasts$: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

    constructor(
        private httpClient: HttpClient,
        private settings: SettingsService,
        private geolocationService: GeolocationService
    ) {
        this.geolocationService.geolocation$.subscribe((coord) => this.getForecastByCoord(coord));
    }

    /**
     * restore forecasts from localstorage
     */
    restoreForecast() {
        const restoredForecasts = JSON.parse(localStorage.getItem(FORECASTS_KEY));
        if (Array.isArray(restoredForecasts) && restoredForecasts.length > 0) {
            this.addForecast(restoredForecasts);
        }
    }

    /**
     * save forecasts in localstorage
     */
    saveForecast() {
        localStorage.setItem(FORECASTS_KEY, JSON.stringify(this.forecasts$.getValue()));
    }

    private addForecast(forecast) {
        if (Array.isArray(forecast)) {
            this.forecasts$.next([...this.forecasts$.getValue(), ...forecast]);
        } else {
            this.forecasts$.next([...this.forecasts$.getValue(), forecast]);
        }
    }

    private getForecast(params: HttpParams) {
        this.httpClient
            .get(this.settings.getApiUrl(), { params: params.set('APPID', API_KEY) })
            .subscribe(
                (forecast) => this.addForecast(forecast),
                (error) => this.handleError(error)
            );
    }

    private getForecastByCoord(coord: GeolocationObject) {
        this.getForecast(new HttpParams()
            .set('lat', coord.lat.toString())
            .set('lon', coord.lon.toString()));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
    }
}
