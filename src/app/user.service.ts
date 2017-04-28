import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(private http: Http) {}

  activeUser: Object;

  /*getActiveUser(): Observable<Object>{
    return new Observable(this);
  }*/

  getUser(): Observable<Object>{
    return this.http.get('https://randomuser.me/api/?results=10')
      .map(this.datosConseguidos);
  }

  datosConseguidos(res: Response){
    console.log('datosConseguidos', res);
    let respuesta = res.json();
    return respuesta;
  }

}
