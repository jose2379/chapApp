import { Component, OnInit } from '@angular/core';
import {Mensaje} from "../mensaje.interface";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  arrMensajes:Array<Mensaje>;
  arrUsuarios: Array<Object>;

  constructor() {
    this.arrMensajes = [];
  }

  ngOnInit() {
  }

  sumamosDesdePadre(ev:Mensaje){
    this.arrMensajes.push(ev);
  }

}
