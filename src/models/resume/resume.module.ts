import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components'
import { ResumeRoutingModule } from './resume-routing.model';


@NgModule({
  declarations: [...components.components],
  imports: [
    CommonModule,
  ]
})
export class ResumeModule { }
