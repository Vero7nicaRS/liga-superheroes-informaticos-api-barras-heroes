import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Superheroe } from './superheroe';

describe('Superheroe', () => {
  let component: Superheroe;
  let fixture: ComponentFixture<Superheroe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Superheroe],
    }).compileComponents();

    fixture = TestBed.createComponent(Superheroe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
