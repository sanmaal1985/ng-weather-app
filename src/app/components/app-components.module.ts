import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './SearchBar/search-bar.component';
import { ForecastComponent } from './Forecast/forecast.component';
import { ForecastListComponent } from './ForecastList/forecast-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ForecastComponent,
      ForecastListComponent,
      SearchBarComponent
  ]
})
export class AppComponentsModule { }
