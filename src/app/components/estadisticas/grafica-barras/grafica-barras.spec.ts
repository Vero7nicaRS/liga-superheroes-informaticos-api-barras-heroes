import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarras } from './grafica-barras';

describe('GraficaBarras', () => {
  let component: GraficaBarras;
  let fixture: ComponentFixture<GraficaBarras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaBarras],
    }).compileComponents();

    fixture = TestBed.createComponent(GraficaBarras);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
