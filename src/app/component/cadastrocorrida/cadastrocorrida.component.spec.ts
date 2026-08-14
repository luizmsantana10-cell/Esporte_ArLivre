import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrocorridaComponent } from './cadastrocorrida.component';

describe('CadastrocorridaComponent', () => {
  let component: CadastrocorridaComponent;
  let fixture: ComponentFixture<CadastrocorridaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrocorridaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastrocorridaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
