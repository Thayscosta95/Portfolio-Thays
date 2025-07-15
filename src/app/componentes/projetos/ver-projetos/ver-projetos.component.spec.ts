import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProjetosComponent } from './ver-projetos.component';

describe('VerProjetosComponent', () => {
  let component: VerProjetosComponent;
  let fixture: ComponentFixture<VerProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerProjetosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
