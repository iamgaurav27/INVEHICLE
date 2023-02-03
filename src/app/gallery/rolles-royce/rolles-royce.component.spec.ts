import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollesRoyceComponent } from './rolles-royce.component';

describe('RollesRoyceComponent', () => {
  let component: RollesRoyceComponent;
  let fixture: ComponentFixture<RollesRoyceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollesRoyceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollesRoyceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
