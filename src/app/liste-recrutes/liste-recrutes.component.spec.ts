import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRecrutesComponent } from './liste-recrutes.component';

describe('ListeRecrutesComponent', () => {
  let component: ListeRecrutesComponent;
  let fixture: ComponentFixture<ListeRecrutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeRecrutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeRecrutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
