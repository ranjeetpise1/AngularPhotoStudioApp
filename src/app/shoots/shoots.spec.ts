import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoots } from './shoots';

describe('Shoots', () => {
  let component: Shoots;
  let fixture: ComponentFixture<Shoots>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Shoots]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shoots);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
