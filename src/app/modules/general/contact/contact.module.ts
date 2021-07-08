import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    FormsModule
    
  ],
  exports: [
    ContactComponent
  ],
  declarations: [
    ContactComponent,
    JavaComponent,
    WebComponent
  ],
  providers: [
  ],
})
export class ContactModule { }