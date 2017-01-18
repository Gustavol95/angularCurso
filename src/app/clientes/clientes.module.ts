import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListClientesComponent} from "./list-clientes/list-clientes.component";
import {Routes, RouterModule} from "@angular/router";
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import {UpdateClientesComponent} from "./form-clientes/update-clientes.component";
import { ModalComponent } from './modal/modal.component';

const routes:Routes =[
  {path:'',component : ListClientesComponent},
  {path:'create',component : FormClientesComponent},
  {path: ':id', component:UpdateClientesComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListClientesComponent, FormClientesComponent, UpdateClientesComponent, ModalComponent]
})
export class ClientesModule { }
