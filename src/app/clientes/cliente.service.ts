import { Injectable } from '@angular/core';
import {HttpModule, Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class ClienteService {

  private _http:Http;
  private url:string="http://lab.ie-soluciones.com/conymat/api/v1/clientes";
  private _token:string;


  constructor(ht: Http) {
    this._http=ht;
  }

  getAll(): Observable<any> {
    this._token=localStorage.getItem("token");
    let options=new RequestOptions();
    options.headers=new Headers();
    options.headers.append("Authorization","Bearer "+this._token);
    options.headers.append("Accept","aplication/json");
    return this._http.get(this.url,options)
      .map(res=>res.json());
  }

}
