import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './SearchBar/search-bar.component';
import { ForecastComponent } from './Forecast/forecast.component';
import { ForecastListComponent } from './ForecastList/forecast-list.component';
import { MainContainerComponent } from './MainContainer/main-container.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        ForecastComponent,
        ForecastListComponent,
        SearchBarComponent,
        MainContainerComponent
    ],
    exports: [
        ForecastComponent,
        ForecastListComponent,
        SearchBarComponent,
        MainContainerComponent,
        MaterialModule
    ]
})
export class AppComponentsModule { }
