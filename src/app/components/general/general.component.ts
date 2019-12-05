import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Weather } from 'src/app/interfaces/weatherInterface';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  changeBlocks = false;
  isLodaing = false;
  error = null;

  weatherInfo: Weather = {city: ' ', temperature: ' ',
    details: {state: ' ', pressure: ' ', humidity: ' ', clouds: ' '}, image: ' ' };

  inputForm: FormGroup;

  ngOnInit() {
    this.inputForm = new FormGroup({
      'weatherInput': new FormControl(null, [Validators.required, this.onlyLetters]),
    });
  }

   constructor(private api: ApiService, private router: Router) {}

  onGetWeather(city: HTMLInputElement) {
    console.log(this.inputForm);
    this.isLodaing = true;
    this.api.makeRequest(city.value)
      .subscribe(data => {
        this.isLodaing = false;
        const d = data as any;
        const temperature = d.main.temp - 273;
        this.weatherInfo.city = d.name + ' ' + d.sys.country;
        this.weatherInfo.temperature = temperature.toPrecision(2) + '°C';
        this.weatherInfo.details.state = 'Today is ' + d.weather[0].description;
        this.weatherInfo.details.pressure = 'Pressure: ' + d.main.pressure + ' mm Hg';
        this.weatherInfo.details.humidity = 'Humidity: ' + d.main.humidity + '%';
        this.weatherInfo.details.clouds = 'Clouds: ' + d.clouds.all + '%';
        this.weatherInfo.image = 'http://openweathermap.org/img/wn/' + (d.weather[0].icon) + '@2x.png';
        this.changeBlocks = true;
        this.api.activatedEmiter.next(true);
        this.inputForm.reset();
      },
      error => {
        this.error = 'There is no such city!';
        this.inputForm.reset();
      });
  }

  onHandleError() {
    this.error = null;
    this.isLodaing = false;
  }

  onClear() {
    this.changeBlocks = false;
    this.api.activatedEmiter.next(false);
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onlyLetters(control: FormControl): {[s: string]: boolean} {
    const city: string = control.value;
    const regex = /^[A-Za-z]+$/;
    if (!regex.test(city)) {
      return {'onlyLetters': true};
    }
    return null;
  }
}
