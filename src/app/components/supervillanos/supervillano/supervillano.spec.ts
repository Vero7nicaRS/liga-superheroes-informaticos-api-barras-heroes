import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supervillano } from './supervillano';

describe('Supervillano', () => {
  let component: Supervillano;
  let fixture: ComponentFixture<Supervillano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Supervillano],
    }).compileComponents();

    fixture = TestBed.createComponent(Supervillano);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
