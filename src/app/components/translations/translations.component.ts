import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.scss']
})
export class TranslationsComponent implements OnInit {
  languages = ['English', 'Ukrainian'];

  translationsForm: FormGroup;
  public test: any;

  constructor(private router: Router, private translation: TranslationService) { }

  ngOnInit() {
    this.test = this.translation.staticText;
    console.log(this.test);

    this.translationsForm = new FormGroup({});

    Object.keys(this.test).forEach(key => {
      this.translationsForm.setControl(key, new FormControl(this.test[key]));
    });
  }

  onBack() {
    this.router.navigate(['']);
  }

  onSaveTranslations() {
    Object.keys(this.translationsForm.value).forEach(key => {
      this.translation.staticText[key] = this.translationsForm.value[key];
    });
    this.translation.makeSetTranslationRequest();
  }

  public bindNgModel(value: string) {
    if (this.translationsForm.get(value)) {
      return this.translationsForm.get(value);
    }
  }
}
