import { Injectable } from '@angular/core';
import { AppSettingsService } from 'src/app/shared/config/app-settings.service';
import { Observable } from 'rxjs';
import { map, switchMap, catchError, takeUntil, takeWhile, filter, flatMap } from 'rxjs/operators';
import { Infrastructure, InfrastructureApiResponse } from './infrastructure.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfrastructureService {

  constructor(
    private appSettingsService: AppSettingsService,
    private http: HttpClient) { }

  getInfrastructures():Observable<Infrastructure[]>{
      const infrastructuresApiEndpoint:string = this.appSettingsService.getSettings().appSettings.apiEndpoints.infrastructures;
      return this.http.get<InfrastructureApiResponse>(infrastructuresApiEndpoint).pipe(map(response=> response.response));
  }
}
