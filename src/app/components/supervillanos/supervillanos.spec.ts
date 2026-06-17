import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supervillanos } from './supervillanos';

describe('Supervillanos', () => {
  let component: Supervillanos;
  let fixture: ComponentFixture<Supervillanos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supervillanos],
    }).compileComponents();

    fixture = TestBed.createComponent(Supervillanos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
