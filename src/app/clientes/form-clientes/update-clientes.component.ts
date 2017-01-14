/**
 * Created by iedeveloper on 13/01/17.
 */
import {Component, OnInit} from "@angular/core";
import {FormClientesComponent} from "./form-clientes.component";
import {ActivatedRoute} from "@angular/router";
@Component(
  {
    selector:'app-update-clientes',
    templateUrl: './form-clientes.component.html'
  })

export class UpdateClientesComponent extends FormClientesComponent implements  OnInit{
  private _activatedRoute: ActivatedRoute;
  titulo : string = "Update "

  constructor(activatedRoute:ActivatedRoute){
    super();
    this._activatedRoute=activatedRoute;
  }
  ngOnInit(){
    console.log("Parámetro: "+this._activatedRoute.snapshot.params[':id']);

  }
}
