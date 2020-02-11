import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TranslationService {

  staticText: { [key: string]: string } = {};

  selectedLanguage: string = 'eng';

  constructor(private http: HttpClient) {}

  makeTranslationsRequest(language: string) {
    return this.http.get(environment.translationsUrl + language)
      .subscribe(data => {
        const d = data as any;

        Object.keys(d.keys).forEach(key => {
          this.staticText[key] = d.keys[key];
        });

        // this.staticText['BACK_BTN'] = d.keys.BACK_BTN;
        // this.staticText['CLOUDS'] = d.keys.CLOUDS;
        // this.staticText['FORM_TITLE'] = d.keys.FORM_TITLE;
        // this.staticText['GENERAL'] = d.keys.GENERAL;
        // this.staticText['HUMIDITY'] = d.keys.HUMIDITY;
        // this.staticText['PAGE_TITLE'] = d.keys.PAGE_TITLE;
        // this.staticText['PRESSURE'] = d.keys.PRESSURE;
        // this.staticText['SEARCH_BTN'] = d.keys.SEARCH_BTN;
        // this.staticText['LOADING'] = d.keys.LOADING;
        // this.staticText['OKAY'] = d.keys.OKAY;
        // this.staticText['CLEAR'] = d.keys.CLEAR;
        // this.staticText['ERROR'] = d.keys.ERROR;
        // this.staticText['WELCOME'] = d.keys.WELCOME;
        // this.staticText['START'] = d.keys.START;
        // this.staticText['CHANGE_TRANSLATION_BTN'] = d.keys.CHANGE_TRANSLATION_BTN;
        // this.staticText['NO_CITY'] = d.keys.NO_CITY;
        // this.staticText['INVALID_DATA'] = d.keys.INVALID_DATA;
    });
  }

  makeSetTranslationRequest() {
    let langId: number;
    if (this.selectedLanguage === 'eng') {
      langId = 1;
    } else {
      langId = 2;
    }
    const data = {
      id: langId,
      langCode: this.selectedLanguage,
      keys: [
          {
            keyName: 'BACK_BTN',
            keyValue: this.staticText['BACK_BTN']
          },
          {
            keyName: 'CLOUDS',
            keyValue: this.staticText['CLOUDS']
          },
          {
            keyName: 'FORM_TITLE',
            keyValue: this.staticText['FORM_TITLE']
          },
          {
            keyName: 'GENERAL',
            keyValue: this.staticText['GENERAL']
          },
          {
            keyName: 'HUMIDITY',
            keyValue: this.staticText['HUMIDITY']
          },
          {
            keyName: 'PAGE_TITLE',
            keyValue: this.staticText['PAGE_TITLE']
          },
          {
            keyName: 'PRESSURE',
            keyValue: this.staticText['PRESSURE']
          },
          {
            keyName: 'SEARCH_BTN',
            keyValue: this.staticText['SEARCH_BTN']
          },
          {
            keyName: 'LOADING',
            keyValue: this.staticText['LOADING']
          },
          {
            keyName: 'OKAY',
            keyValue: this.staticText['OKAY']
          },
          {
            keyName: 'CLEAR',
            keyValue: this.staticText['CLEAR']
          },
          {
            keyName: 'ERROR',
            keyValue: this.staticText['ERROR']
          },
          {
            keyName: 'WELCOME',
            keyValue: this.staticText['WELCOME']
          },
          {
            keyName: 'START',
            keyValue: this.staticText['START']
          },
          {
            keyName: 'CHANGE_TRANSLATION_BTN',
            keyValue: this.staticText['CHANGE_TRANSLATION_BTN']
          }
        ]
    };
    console.log(data);
    this.http.put('https://localhost:5001/Translations', data)
      .subscribe(responseData => console.log(responseData));
  }
}
