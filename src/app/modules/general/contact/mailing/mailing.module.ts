import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingRoutingModule } from './mailing-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MailingRoutingModule,
    HttpClientModule
  ]
})
export class MailingModule { }
