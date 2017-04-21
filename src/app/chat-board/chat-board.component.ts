import {Component, Input, OnInit} from '@angular/core';
import {Mensaje} from "../mensaje.interface";

@Component({
  selector: 'app-chat-board',
  templateUrl: './chat-board.component.html',
  styleUrls: ['./chat-board.component.css']
})
export class ChatBoardComponent implements OnInit {

  @Input() listaMensajes:Array<Mensaje>;

  constructor() { }

  ngOnInit() { }

}
