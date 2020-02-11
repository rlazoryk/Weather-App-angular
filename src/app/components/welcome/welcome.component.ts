import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private translation: TranslationService) { }

  ngOnInit() {

  }

  onStart() {
    this.router.navigate(['/weather']);
  }

  goToTranslations() {
    this.router.navigate(['/translations']);
  }
}
