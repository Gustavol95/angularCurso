import {Component, OnInit, Input} from '@angular/core';
import {ClienteService} from "../cliente.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  private _clienteService : ClienteService;
  private _clientes: any[]=[];
  closeResult: string;
  constructor(clienteService : ClienteService,private modalService: NgbModal ) {
    this._clienteService=clienteService;
  }

  ngOnInit() {
    this._clienteService.getAll().subscribe(res=>this._clientes=res.data);
  }

  onEliminarClick(element){
    console.log("clickeado en"+this._clientes.indexOf(element));
    this._clientes.splice(this._clientes.indexOf(element),1);
  }
  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
