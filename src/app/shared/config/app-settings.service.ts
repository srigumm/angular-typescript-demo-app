import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';

export class AppConfigOptions {
  appSettings: {
    apiEndpoints: {
      infrastructures: string;
      device: string;
      }
  };
}

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  settings: Observable<Readonly<AppConfigOptions>>;
  
  private settingsSource: BehaviorSubject<AppConfigOptions> = new BehaviorSubject<AppConfigOptions>(new AppConfigOptions());

  constructor() { 
    this.settings = this.settingsSource.asObservable();
  }

  setSettings(settings: Partial<AppConfigOptions>) {
    const updatedConfig = { ...this.settingsSource.value, ...settings };
    this.settingsSource.next(updatedConfig);
  }

  getSettings(): Readonly<AppConfigOptions> {
      return this.settingsSource.value;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PreInitService {
    constructor(
        private httpBackend: HttpBackend,
        private appSettingsService: AppSettingsService,
    ) { }

    async onInit(): Promise<boolean> {
        const http = new HttpClient(this.httpBackend);
        try {
            const config = await http.get<AppConfigOptions>('assets/config/config.json').toPromise();
            this.appSettingsService.setSettings(config);
            const _ = console.log('config.json loaded');
            return true;
        }
        catch (error) {
            console.error('Error loading application configuration', error);
            return Promise.resolve(false);
        }

    }
}
