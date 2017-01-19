import {Component, OnInit, Input} from '@angular/core';
import {ClienteService} from "../cliente.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {isNullOrUndefined} from "util";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  private _clienteService : ClienteService;
  private _clientes: any[]=[];
  closeResult: string;
  constructor(clienteService : ClienteService,private router:Router  ) {
    this._clienteService=clienteService;
  }

  ngOnInit() {

    this._clientes=JSON.parse(localStorage.getItem("listado"));
    if(isNullOrUndefined(this._clientes)){
      console.log("Null or undefined "+localStorage.getItem("listado"));
      this.retrieveClients();
    }
  }

  retrieveClients(){
    this._clienteService.getAll().subscribe(res=>{this._clientes=res.data;
    localStorage.setItem("listado",JSON.stringify(this._clientes))});
  }

  onEliminarClick(element){
    console.log("clickeado en"+this._clientes.indexOf(element));
    this._clientes.splice(this._clientes.indexOf(element),1);
    localStorage.setItem("listado",JSON.stringify(this._clientes));
  }


  editar(element){
    console.log(this._clientes[this._clientes.indexOf(element)]);
    localStorage.setItem("editar", this._clientes[this._clientes.indexOf(element)])
    this.router.navigateByUrl("go");
  }
}
