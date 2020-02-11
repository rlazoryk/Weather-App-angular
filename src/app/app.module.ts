import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { GeneralComponent } from './components/general/general.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing,module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { TranslationsComponent } from './components/translations/translations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GeneralComponent,
    WeatherComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    TranslationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
