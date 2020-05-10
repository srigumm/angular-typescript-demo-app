import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeviceComponent } from './list-device/list-device.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { DeviceDetailsComponent } from './device-details/device-details.component';



@NgModule({
  declarations: [ListDeviceComponent, DeviceDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    ListDeviceComponent
  ]
})
export class DeviceModule { }
