import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChatBoardComponent} from "./chat-board/chat-board.component";
import {TextEditorComponent} from "./text-editor/text-editor.component";
import { ChatComponent } from './chat/chat.component';
import {RouterModule} from "@angular/router";
import {chatRoutes} from "./chat.routes";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(chatRoutes)
  ],
  declarations: [
    ChatComponent,
    TextEditorComponent,
    ChatBoardComponent
  ]
})
export class ChatModule { }
