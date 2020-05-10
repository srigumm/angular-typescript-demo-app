import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Observable, throwError } from 'rxjs';
import { Device } from '../device.model';
import { ActivatedRoute } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  public deviceInfo: Observable<Device>
  public errorObject: any;
  constructor(
    private deviceApiService: DeviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("Displyaing  device details of ",id);
    this.deviceInfo = this.deviceApiService.getDeviceDetails(id).pipe(
      catchError(err => {
        this.errorObject = err;
        return throwError(err);
      })
    );
  }
}
