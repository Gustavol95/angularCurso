import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule
  ],
 exports:[
   ReactiveFormsModule,
   NgbModule,
   FormsModule,
   CommonModule
 ]
})
export class SharedModule { }
