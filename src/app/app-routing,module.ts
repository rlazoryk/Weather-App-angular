import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { GeneralComponent } from './components/general/general.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { TranslationsComponent } from './components/translations/translations.component';

const appRoutes: Routes = [
  {
    path: '', component: WelcomeComponent
  },
  {
    path: 'weather', component: GeneralComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'translations', component: TranslationsComponent
  },
  {
    path: 'not-found', component: PageNotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
