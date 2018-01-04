import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-forecast-list',
    templateUrl: 'forecast-list.component.html'
})

export class ForecastListComponent implements OnInit {
    @Input() forecasts: any[];

    constructor() { }

    ngOnInit() { }
}
