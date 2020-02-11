import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService, TranslationService]
})
export class AppComponent implements OnInit {
  title = 'Weather-App-ng';

  constructor(private api: ApiService, private translation: TranslationService) { }

  ngOnInit() {
    this.translation.makeTranslationsRequest('eng');
  }
}
