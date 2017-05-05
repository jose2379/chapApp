import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from "@angular/router";
import {contactRoutes} from "./contact.routes";
import {HttpModule} from "@angular/http";
import {UserService} from "./services/user.service";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(contactRoutes)
  ],
  declarations: [ContactComponent],
  providers: [UserService],
})
export class ContactModule { }
