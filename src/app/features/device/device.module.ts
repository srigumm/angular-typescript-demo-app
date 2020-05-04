import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeviceComponent } from './list-device/list-device.component';



@NgModule({
  declarations: [ListDeviceComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ListDeviceComponent
  ]
})
export class DeviceModule { }
