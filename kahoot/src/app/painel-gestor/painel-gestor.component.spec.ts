import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelGestorComponent } from './painel-gestor.component';

describe('PainelGestorComponent', () => {
  let component: PainelGestorComponent;
  let fixture: ComponentFixture<PainelGestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelGestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
