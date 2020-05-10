import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListInfrastructuresComponent } from './infrastructure/list-infrastructures/list-infrastructures.component';
import { ListDeviceComponent } from './device/list-device/list-device.component';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DeviceModule } from './device/device.module';
import { SharedModule } from '../shared/shared.module';
import { DeviceDetailsComponent } from './device/device-details/device-details.component';


const routes: Routes = [
  { path: 'infrastructures', component: ListInfrastructuresComponent, pathMatch: 'full' },
  { path: 'infrastructures/:id', component: ListInfrastructuresComponent, pathMatch: 'full' },//, canActivate: [AuthGuardService]
  { path: 'infrastructures/:id/devices', component: ListDeviceComponent, pathMatch: 'full' },
  { path: 'device/:id', component: DeviceDetailsComponent, pathMatch: 'full',}, //canDeactivate: [CanDeactivateGuard]
  { path: '', redirectTo: '/infrastructures', pathMatch: 'full' },
  { path: '**', redirectTo: '/infrastructures' },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InfrastructureModule,
    DeviceModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports:[
    RouterModule
  ]
})
export class FeaturesModule { }
