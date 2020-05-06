import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeviceComponent } from './list-device/list-device.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListDeviceComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ListDeviceComponent
  ]
})
export class DeviceModule { }
