import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { PreloadSelectedModulesList } from '../app/modules/+chat/preload-custom.service';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadSelectedModulesList
    }),
    ReactiveFormsModule
  ],
  providers: [PreloadSelectedModulesList],
  bootstrap: [AppComponent]
})
export class AppModule { }
