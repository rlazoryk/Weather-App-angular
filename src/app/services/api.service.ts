import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable} from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiService {
  private apiUrl = environment.apiUrl;

  city: string;

  activatedEmiter = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  makeRequest(city: string) {
    this.city = city;
    return this.http.get(this.apiUrl + '/weather?q=' + city + '&appid=017f85cbc4dda5a17ed09430b5ee378f');
  }
}
