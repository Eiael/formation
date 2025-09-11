import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {SinistreService} from '../service/sinistre.service';

export const sinistreCalcGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const sinistreService = inject(SinistreService);

  if (sinistreService.getTarif() === undefined) {
    router.navigate(['']).then();
    return false;
  }

  return true;
};
