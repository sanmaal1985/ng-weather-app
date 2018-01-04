import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SettingsService } from './services/settings.service';
import { ForecastService } from './services/forecast.service';
import { GeolocationService } from './services/geolocation.service';
import { AppComponentsModule } from './components/app-components.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppComponentsModule
    ],
    providers: [SettingsService, ForecastService, GeolocationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
