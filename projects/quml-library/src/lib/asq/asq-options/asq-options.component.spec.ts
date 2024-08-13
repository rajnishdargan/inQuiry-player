import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsqOptionsComponent } from './asq-options.component';

describe('AsqOptionsComponent', () => {
  let component: AsqOptionsComponent;
  let fixture: ComponentFixture<AsqOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsqOptionsComponent]
    });
    fixture = TestBed.createComponent(AsqOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
