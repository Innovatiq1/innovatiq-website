import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTwoComponent } from './part-two.component';

describe('PartTwoComponent', () => {
  let component: PartTwoComponent;
  let fixture: ComponentFixture<PartTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartTwoComponent]
    });
    fixture = TestBed.createComponent(PartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
