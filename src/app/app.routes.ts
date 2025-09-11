import { Routes } from '@angular/router';
import {MainMenuComponent} from './view/main-menu-component/main-menu-component';
import {NotFoundComponent} from './view/not-found-component/not-found-component';
import {SinistreComponent} from './view/sinistre-component/sinistre-component';
import {SinistreSuccessComponent} from './view/sinistre-success-component/sinistre-success-component';
import {sinistreCalcGuard} from './guard/sinistre-calc-guard';

export const routes: Routes = [
  { path: '', component: MainMenuComponent },
  { path: 'sinistre', component: SinistreComponent },
  { path: 'sinistre-success', component: SinistreSuccessComponent, canActivate: [sinistreCalcGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];
