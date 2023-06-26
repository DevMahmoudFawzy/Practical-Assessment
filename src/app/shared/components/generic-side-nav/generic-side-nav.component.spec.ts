import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSideNavComponent } from './generic-side-nav.component';

describe('GenericSideNavComponent', () => {
  let component: GenericSideNavComponent;
  let fixture: ComponentFixture<GenericSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericSideNavComponent]
    });
    fixture = TestBed.createComponent(GenericSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
