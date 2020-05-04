import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfrastructuresComponent } from './list-infrastructures.component';

describe('ListInfrastructuresComponent', () => {
  let component: ListInfrastructuresComponent;
  let fixture: ComponentFixture<ListInfrastructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfrastructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListInfrastructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
