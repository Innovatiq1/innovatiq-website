import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFourComponent } from './part-four.component';

describe('PartFourComponent', () => {
  let component: PartFourComponent;
  let fixture: ComponentFixture<PartFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartFourComponent]
    });
    fixture = TestBed.createComponent(PartFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
