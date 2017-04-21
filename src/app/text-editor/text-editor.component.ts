import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Mensaje} from "../mensaje.interface";
//import { Mensaje }

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  @Output() enviamosMensajeDesdeHijo = new EventEmitter<Object>();
  mensaje:string;
  userName:string;

  constructor() {
  }

  ngOnInit() {
    this.mensaje = '';
    this.userName = '';
  }

  enviamosTexto(){
    if(this.userName == ''){
      console.log('Debes añadir un Usuario')
    } else if(this.mensaje == ''){
      console.log('Debes añadir un Mensaje')
    } else {
      let mensajeTemp:Mensaje = {contentMensaje: this.mensaje, userName: this.userName};
      this.enviamosMensajeDesdeHijo.emit(mensajeTemp);
      this.mensaje = '';
      this.userName = '';
    }
  }

}
