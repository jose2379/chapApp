import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { ChatBoardComponent } from './chat-board/chat-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent,
    ChatBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
