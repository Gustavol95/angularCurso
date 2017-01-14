import { Component, OnInit } from '@angular/core';
import {ClienteService} from "../cliente.service";

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  private _clienteService : ClienteService;
  private _clientes: any[]=[];

  constructor(clienteService : ClienteService) {
    this._clienteService=clienteService;
  }

  ngOnInit() {
    this._clienteService.getAll().subscribe(res=>this._clientes=res.data);
  }

}
