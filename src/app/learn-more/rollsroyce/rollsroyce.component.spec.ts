import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollsroyceComponent } from './rollsroyce.component';

describe('RollsroyceComponent', () => {
  let component: RollsroyceComponent;
  let fixture: ComponentFixture<RollsroyceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollsroyceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollsroyceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
