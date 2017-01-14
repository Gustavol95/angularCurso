import {CanActivate} from "@angular/router";
import {Injectable} from "@angular/core";
import {isNullOrUndefined} from "util";
/**
 * Created by iedeveloper on 14/01/17.
 */

@Injectable()
export class IsActive implements CanActivate{

  constructor(){}
  canActivate(){
    let tokenStr:string = localStorage.getItem("token");
    if(isNullOrUndefined(tokenStr)){
      return false;
    }
    return true;
  }
}
