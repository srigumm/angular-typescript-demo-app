import { Component, OnInit } from '@angular/core';
import {SvgiconsService} from './shared/common/svgicons.service'
import { PreInitService } from './shared/config/app-settings.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-typescript-demo-app';

  /**
   *
   */
  constructor(private iconService: SvgiconsService, private preInitService: PreInitService) {
  }
  async ngOnInit(): Promise<void> {
    this.iconService.init();
    await this.preInitService.onInit();
  }
}
