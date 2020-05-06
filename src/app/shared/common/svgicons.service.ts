import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SvgiconsService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) { }
  init() {
    this.matIconRegistry.addSvgIcon(
        'infrastructures',
        this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/infrastructures.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'devices',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/icons/devices.svg')
    );
    }
}
