import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDropComponent } from './navbar-drop.component';

describe('NavbarDropComponent', () => {
  let component: NavbarDropComponent;
  let fixture: ComponentFixture<NavbarDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
