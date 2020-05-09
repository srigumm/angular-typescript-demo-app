import { Component, OnInit } from '@angular/core';
import { AppSettingsService } from 'src/app/shared/config/app-settings.service';
import { InfrastructureService } from '../infrastructure.service';
import { map } from 'rxjs/operators';
import { Infrastructure } from '../infrastructure.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-infrastructures',
  templateUrl: './list-infrastructures.component.html',
  styleUrls: ['./list-infrastructures.component.scss']
})
export class ListInfrastructuresComponent implements OnInit {

  public infrastructures: Observable<Infrastructure[]>;
  constructor(
    private infrastructureService: InfrastructureService) { }

  ngOnInit(): void {
    this.infrastructures = this.infrastructureService.getInfrastructures();
  }
}
