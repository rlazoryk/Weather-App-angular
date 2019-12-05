import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private activateSub: Subscription;

  showCity = false;
  city: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.activateSub = this.api.activatedEmiter.subscribe(didEntered => {
      this.city = this.api.city;
      this.showCity = didEntered;
    });
  }
  ngOnDestroy() {
      this.activateSub.unsubscribe();
  }
}
