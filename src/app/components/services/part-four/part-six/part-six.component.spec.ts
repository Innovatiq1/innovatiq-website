import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSixComponent } from './part-six.component';

describe('PartSixComponent', () => {
  let component: PartSixComponent;
  let fixture: ComponentFixture<PartSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartSixComponent]
    });
    fixture = TestBed.createComponent(PartSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
