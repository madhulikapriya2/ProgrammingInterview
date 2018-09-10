import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PickAtrackComponent } from './pick-atrack/pick-atrack.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { SignupComponent } from './signup-login/signup/signup.component';
import { LoginComponent } from './signup-login/login/login.component';
import { PracticeComponent } from './practice/practice.component';
import { FooterComponent } from './footer/footer.component';

const routes:Routes = [
  {path: 'signup-login/signup', component: SignupComponent},
  {path: 'signup-login/login', component: LoginComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PickAtrackComponent,
    SignupLoginComponent,
    SignupComponent,
    LoginComponent,
    PracticeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
