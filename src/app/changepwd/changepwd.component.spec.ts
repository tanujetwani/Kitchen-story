import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwdComponent } from './changepwd.component';

describe('ChangepwdComponent', () => {
  let component: ChangepwdComponent;
  let fixture: ComponentFixture<ChangepwdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangepwdComponent]
    });
    fixture = TestBed.createComponent(ChangepwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
