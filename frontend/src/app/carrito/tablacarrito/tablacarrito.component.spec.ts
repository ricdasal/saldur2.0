import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablacarritoComponent } from './tablacarrito.component';

describe('TablacarritoComponent', () => {
  let component: TablacarritoComponent;
  let fixture: ComponentFixture<TablacarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablacarritoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablacarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
