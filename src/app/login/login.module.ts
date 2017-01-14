import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

const routes:Routes=[
  {path:'login', component:LoginComponent}
]

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
  exports:[LoginComponent,RouterModule]
})
export class LoginModule { }
