import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { AppRoutingModule } from '../app-routing.module';
@NgModule({
    imports:[
        MaterialModule,
        CommonModule,
    AppRoutingModule,

    ],
    declarations:[
        HeaderComponent,
        LeftNavigationComponent
    ],
    exports:[
        HeaderComponent,
        LeftNavigationComponent
    ]
})
export class SharedModule{}