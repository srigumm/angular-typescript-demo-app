import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettingsService } from 'src/app/shared/config/app-settings.service';
import { Observable } from 'rxjs';
import { map, switchMap, catchError, takeUntil, takeWhile, filter, flatMap } from 'rxjs/operators';
import { Device, DevicesApiResponse, DeviceGroup, DeviceDetailsResponse } from './device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(
    private appSettingsService: AppSettingsService,
    private http: HttpClient) { }

  getDevices(infrastructureId:string):Observable<Device[]>{
      const infrastructuresApiEndpoint:string = this.appSettingsService.getSettings().appSettings.apiEndpoints.infrastructures;
      const devicesApiEndpoint:string = infrastructuresApiEndpoint +"/" + infrastructureId + "/devices";
      const extractDevices = (deviceGroups:DeviceGroup[]) => deviceGroups.reduce((sum,currentGroup)=>sum.concat(currentGroup.device_sensors),[]);
      return this.http.get<DevicesApiResponse>(devicesApiEndpoint).pipe(map(response=> extractDevices(response.response.device_groups)));
  }
  getDeviceDetails(deviceId:string): Observable<Device>{
      const deviceApiEndpoint:string = this.appSettingsService.getSettings().appSettings.apiEndpoints.device;
      const getDeviceByIdEndPoint = deviceApiEndpoint + "/" + deviceId;
      return this.http.get<DeviceDetailsResponse>(getDeviceByIdEndPoint).pipe(map(response=>response.response));
  }
}
