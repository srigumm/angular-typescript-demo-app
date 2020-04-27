import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
@NgModule({
    imports:[
        MaterialModule
    ],
    declarations:[
        HeaderComponent
    ],
    exports:[
        HeaderComponent,
    ]
})
export class SharedModule{}