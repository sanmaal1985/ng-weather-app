import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: 'search-bar.component.html',
    styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
    private searchString = '';
    constructor(private forecast: ForecastService) { }

    ngOnInit() { }

    private clearSearchString() {
        this.searchString = '';
    }

    private getForecast() {
        this.forecast.getForecastByCityName(this.searchString);
    }
}
