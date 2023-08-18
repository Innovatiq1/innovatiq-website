import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAppDevComponent } from './business-app-dev.component';

describe('BusinessAppDevComponent', () => {
  let component: BusinessAppDevComponent;
  let fixture: ComponentFixture<BusinessAppDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAppDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAppDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
