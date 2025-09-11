import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sinistreCalcGuard } from './sinistre-calc-guard';

describe('sinistreCalcGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sinistreCalcGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
