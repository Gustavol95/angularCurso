import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form : FormGroup;
  private _fb : FormBuilder;
  private _http: Http;
  private _router: Router;

  constructor(fb:FormBuilder, http: Http, router:Router) {
    this._fb=fb;
    this._http=http;
    this._router=router;
  }

  ngOnInit() {
    this.form=this._fb.group({
      email:[null,[Validators.required]],
      password: [null,[Validators.required]]} );
  }

  onSubmit() {
    console.log(this.form.value);
    let url: string = "http://lab.ie-soluciones.com/conymat/api/v1/login"
    let params = this.form.value;
    this._http.post(url, params)
      .map(d => d.json())
      .subscribe(d => this.onResponse(d));
  }

  onResponse(response){
    localStorage.setItem('token',response.token);
    this._router.navigateByUrl('home');
  }
  }


