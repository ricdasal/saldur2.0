import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteProductosComponent } from './reporte-productos.component';

describe('ReporteProductosComponent', () => {
  let component: ReporteProductosComponent;
  let fixture: ComponentFixture<ReporteProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
