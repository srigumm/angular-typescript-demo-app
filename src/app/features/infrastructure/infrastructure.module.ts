import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInfrastructuresComponent } from './list-infrastructures/list-infrastructures.component';



@NgModule({
  declarations: [ListInfrastructuresComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ListInfrastructuresComponent
  ]
})
export class InfrastructureModule { }
