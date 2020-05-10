import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInfrastructuresComponent } from './list-infrastructures/list-infrastructures.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListInfrastructuresComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    ListInfrastructuresComponent
  ]
})
export class InfrastructureModule { }
