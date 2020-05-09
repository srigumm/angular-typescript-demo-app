import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from 'src/app/shared/config/app-settings.service';

@Component({
  selector: 'app-list-infrastructures',
  templateUrl: './list-infrastructures.component.html',
  styleUrls: ['./list-infrastructures.component.scss']
})
export class ListInfrastructuresComponent implements OnInit {

  constructor(private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    console.log(this.appSettingsService.getSettings().appSettings.apiEndpoints.device);
  }

}
