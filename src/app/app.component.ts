import { Component } from '@angular/core';
import {Mensaje} from "./mensaje.interface";
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arrMensajes:Array<Mensaje>;
  arrUsuarios: Array<Object>;


  constructor(private uS : UserService){
    this.arrMensajes = [];
    uS.getUser()
      .subscribe(usuarios => {
        this.arrUsuarios = usuarios['results'];
        console.log('usuarios', this.arrUsuarios);
      })

  }

  sumamosDesdePadre(ev:Mensaje){
    this.arrMensajes.push(ev);
  }
}
