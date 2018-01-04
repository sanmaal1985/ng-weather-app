import { Component, OnDestroy, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/geolocation.service';
import { ForecastService } from '../../services/forecast.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit, OnDestroy {

    private ngUnsubscribe: Subject<void> = new Subject<void>();
    private forecasts: any[];

    constructor(
        private forecastService: ForecastService,
        private geolocationService: GeolocationService
    ) { }

    ngOnInit() {
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
        this.forecasts = [...forecasts];
    }

}
