import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LeftNavigationComponent } from './shared/left-navigation/left-navigation.component';
import { FeaturesModule } from './features/features.module';
import { PreInitService } from './shared/config/app-settings.service';


export function init_app(appLoadService: PreInitService) {
  return () => appLoadService.onInit();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    FeaturesModule
  ],
  providers: [
    PreInitService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [PreInitService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
