import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Superheroes } from './superheroes';

describe('Superheroes', () => {
  let component: Superheroes;
  let fixture: ComponentFixture<Superheroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Superheroes],
    }).compileComponents();

    fixture = TestBed.createComponent(Superheroes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
