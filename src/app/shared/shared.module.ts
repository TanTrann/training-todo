import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './components/shared/shared.component';


@NgModule({
  declarations: [
    SharedComponentComponent,
    SharedComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedComponentComponent
  ]
})
export class SharedModule { }
