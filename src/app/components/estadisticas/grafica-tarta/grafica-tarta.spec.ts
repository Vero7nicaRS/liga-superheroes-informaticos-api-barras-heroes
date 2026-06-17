import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTarta } from './grafica-tarta';

describe('GraficaTarta', () => {
  let component: GraficaTarta;
  let fixture: ComponentFixture<GraficaTarta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaTarta],
    }).compileComponents();

    fixture = TestBed.createComponent(GraficaTarta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
