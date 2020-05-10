import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../device.service';
import { Observable } from 'rxjs';
import { Device } from '../device.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {

  public deviceInfo: Observable<Device>
  constructor(
    private deviceApiService: DeviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("Displyaing  device details of ",id);
    this.deviceInfo = this.deviceApiService.getDeviceDetails(id);
  }
}
