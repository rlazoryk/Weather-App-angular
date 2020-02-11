import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { TranslationService } from 'src/app/services/translation.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private activateSub: Subscription;

  languages = ['eng', 'ukr'];

  showCity = false;

  city: string;

  selectForm: FormGroup;

  constructor(private api: ApiService, private translation: TranslationService) { }

  ngOnInit() {
    this.activateSub = this.api.activatedEmiter.subscribe(didEntered => {
      this.city = this.api.city;
      this.showCity = didEntered;
    });
    this.selectForm = new FormGroup({
      'selectedLanguage': new FormControl('eng')
    });
  }

  ngOnDestroy() {
      this.activateSub.unsubscribe();
  }

  changeLanguage() {
    this.translation.makeTranslationsRequest(this.selectForm.get("selectedLanguage").value);
    this.translation.selectedLanguage = this.selectForm.get("selectedLanguage").value;
  }
}
