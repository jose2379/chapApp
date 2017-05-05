import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'contact',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadChildren: './modules/+contact/+contact.module#ContactModule',
    data: {
      preload: false
    }
  },
  {
    path: 'chat',
    loadChildren: './modules/+chat/+chat.module#ChatModule',
    data: {
      preload: false
    }
  }
];
