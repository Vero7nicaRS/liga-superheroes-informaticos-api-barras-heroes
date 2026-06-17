import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarrasHeroes } from './grafica-barras-heroes';

describe('GraficaBarrasHeroes', () => {
  let component: GraficaBarrasHeroes;
  let fixture: ComponentFixture<GraficaBarrasHeroes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaBarrasHeroes],
    }).compileComponents();

    fixture = TestBed.createComponent(GraficaBarrasHeroes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
