import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListInfrastructuresComponent } from './infrastructure/list-infrastructures/list-infrastructures.component';
import { ListDeviceComponent } from './device/list-device/list-device.component';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DeviceModule } from './device/device.module';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'infrastructures', component: ListInfrastructuresComponent, pathMatch: 'full' },
  { path: 'infrastructures/:id', component: ListInfrastructuresComponent, pathMatch: 'full' },//, canActivate: [AuthGuardService]
  { path: 'devices', component: ListDeviceComponent, pathMatch: 'full' },
  { path: 'devices/:id', component: ListDeviceComponent, pathMatch: 'full',}, //canDeactivate: [CanDeactivateGuard]
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
    SharedModule
  ],
  exports:[
    RouterModule
  ]
})
export class FeaturesModule { }
