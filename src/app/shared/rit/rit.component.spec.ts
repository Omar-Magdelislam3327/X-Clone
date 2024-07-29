import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RitComponent } from './rit.component';

describe('RitComponent', () => {
  let component: RitComponent;
  let fixture: ComponentFixture<RitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RitComponent]
    });
    fixture = TestBed.createComponent(RitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
