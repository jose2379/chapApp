import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  arrUsuarios: Array<Object>;

  constructor(private uS : UserService) {

    uS.getUser()
      .subscribe(usuarios => {
        this.arrUsuarios = usuarios['results'];
      });

  }

  ngOnInit() {
  }

  enviarDatos(){
    console.log('enviar datos');
  }

}
