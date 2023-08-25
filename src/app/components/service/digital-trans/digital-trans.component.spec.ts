import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTransComponent } from './digital-trans.component';

describe('DigitalTransComponent', () => {
  let component: DigitalTransComponent;
  let fixture: ComponentFixture<DigitalTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalTransComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
