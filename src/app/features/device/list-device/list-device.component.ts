import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Device } from '../device.model';
import { Observable } from 'rxjs';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.scss']
})
export class ListDeviceComponent implements OnInit {
  devices: Observable<Device[]>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private devicesApiService: DeviceService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log("Displyaing devices of ",id);

    this.devices = this.devicesApiService.getDevices(id);
  }

}
