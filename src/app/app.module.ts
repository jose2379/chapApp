import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ChatBoardComponent } from './chat-board/chat-board.component';

import {UserService} from "./user.service";
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ChatBoardComponent,
    ListaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
