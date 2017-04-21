import { Component } from '@angular/core';
import {Mensaje} from "./mensaje.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  arrMensajes:Array<Mensaje>;
  mensajeRecibido:string;
  userQueEnvia:string;


  constructor(){
  }

  sumamosDesdePadre(ev:Mensaje){
//    let mensajeRecibido:Mensaje = {contentMensaje: ev.contentMensaje, userName: ev.userName};
    this.arrMensajes.push(ev);
//    this.mensajeRecibido = ev.contentMensaje;
//    this.userQueEnvia = ev.userName;
  }
}
