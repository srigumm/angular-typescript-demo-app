import { Component, OnInit } from '@angular/core';
import {SvgiconsService} from './shared/common/svgicons.service'
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
  constructor(private iconService: SvgiconsService) {
  }
  ngOnInit(): void {
    this.iconService.init();
  }
}
