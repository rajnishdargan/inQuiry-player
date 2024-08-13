import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsqComponent } from './asq.component';

describe('AsqComponent', () => {
  let component: AsqComponent;
  let fixture: ComponentFixture<AsqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsqComponent]
    });
    fixture = TestBed.createComponent(AsqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
