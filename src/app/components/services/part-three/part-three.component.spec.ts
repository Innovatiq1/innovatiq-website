import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartThreeComponent } from './part-three.component';

describe('PartThreeComponent', () => {
  let component: PartThreeComponent;
  let fixture: ComponentFixture<PartThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartThreeComponent]
    });
    fixture = TestBed.createComponent(PartThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
