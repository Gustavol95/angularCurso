import { Component, OnInit,NgModule } from '@angular/core';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html'
})
export class FormClientesComponent implements OnInit {

  titulo : string= "Create"
  constructor() { }

  ngOnInit() {
  }

}
