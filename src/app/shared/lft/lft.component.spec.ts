import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LftComponent } from './lft.component';

describe('LftComponent', () => {
  let component: LftComponent;
  let fixture: ComponentFixture<LftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LftComponent]
    });
    fixture = TestBed.createComponent(LftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
