import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchformComponent } from './searchform.component';

describe('SearchformComponent', () => {
  let component: SearchformComponent;
  let fixture: ComponentFixture<SearchformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchformComponent]
    });
    fixture = TestBed.createComponent(SearchformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
