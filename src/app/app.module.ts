import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import {routing} from "./app.routing";
import {LoginComponent} from "./login/login/login.component";
import {LoginModule} from "./login/login.module";
import {IsActive} from "./utils/isActive";
import {ClienteService} from "./clientes/cliente.service";



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    routing,
    LoginModule
  ],
  providers: [IsActive,ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
