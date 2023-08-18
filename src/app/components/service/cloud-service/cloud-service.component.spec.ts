import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServiceComponent } from './cloud-service.component';

describe('CloudServiceComponent', () => {
  let component: CloudServiceComponent;
  let fixture: ComponentFixture<CloudServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
