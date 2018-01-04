import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './SearchBar/search-bar.component';
import { ForecastComponent } from './Forecast/forecast.component';
import { ForecastListComponent } from './ForecastList/forecast-list.component';
import { MainContainerComponent } from './MainContainer/main-container.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './Header/header.component';

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
        MainContainerComponent,
        HeaderComponent,
    ],
    exports: [
        ForecastComponent,
        ForecastListComponent,
        SearchBarComponent,
        MainContainerComponent,
        HeaderComponent,
        MaterialModule
    ]
})
export class AppComponentsModule { }
