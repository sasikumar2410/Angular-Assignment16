import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JavaService } from 'src/app/Services/java.service';

import { ContactComponent } from './contact.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';

const routes: Routes =  [
  {
    path:'', component: ContactComponent,children:[
      {
        path: 'java', component:JavaComponent
      },
      {
        path: 'web', component:WebComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }