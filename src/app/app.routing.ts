import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./login/login/login.component";
import {IsActive} from "./utils/isActive";
/**
 * Created by iedeveloper on 13/01/17.
 */

const routes:Routes=[
  {path:'home', component: WelcomeComponent,
    canActivate:[IsActive]
  },
  {path:'clientes', loadChildren: 'app/clientes/clientes.module#ClientesModule',
    canActivate:[IsActive]},

]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
