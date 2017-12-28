import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/add/operator/takeUntil';

import { SettingsService } from './services/settings.service';
import { ForecastService } from './services/forecast.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private title;
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private settings: SettingsService,
        private forecastService: ForecastService,
        private geolocationService: GeolocationService
    ) { }

    ngOnInit() {
        this.title = this.settings.getAppTitle();
        this.forecastService.forecasts$.takeUntil(this.ngUnsubscribe).subscribe(this.handleForecasts);
        this.forecastService.restoreForecast();
        this.geolocationService.getPosition();
    }

    ngOnDestroy() {
        this.forecastService.saveForecast();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    private handleForecasts(forecasts) {
        console.log(forecasts);
    }
}
