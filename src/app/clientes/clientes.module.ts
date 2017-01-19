import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListClientesComponent} from "./list-clientes/list-clientes.component";
import {Routes, RouterModule} from "@angular/router";
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import {UpdateClientesComponent} from "./form-clientes/update-clientes.component";
import { ModalComponent } from './modal/modal.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import {SharedModule} from "../shared/shared.module";

const routes:Routes =[
  {path:'',component : ListClientesComponent},
  {path:'create',component : FormClientesComponent},
  {path: ':id', component:UpdateClientesComponent},
  {path: 'go', component:EditarClientesComponent}
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListClientesComponent, FormClientesComponent, UpdateClientesComponent, ModalComponent, EditarClientesComponent]
})
export class ClientesModule { }
