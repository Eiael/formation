import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinistreSuccessComponent } from './sinistre-success-component';

describe('SinistreSuccessComponent', () => {
  let component: SinistreSuccessComponent;
  let fixture: ComponentFixture<SinistreSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinistreSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinistreSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
