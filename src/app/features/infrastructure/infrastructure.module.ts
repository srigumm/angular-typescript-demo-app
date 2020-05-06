import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInfrastructuresComponent } from './list-infrastructures/list-infrastructures.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListInfrastructuresComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListInfrastructuresComponent
  ]
})
export class InfrastructureModule { }
