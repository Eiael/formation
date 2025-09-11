import { Component } from '@angular/core';
import {ButtonComponent} from '../../dumb/button-component/button-component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu',
  imports: [
    ButtonComponent
  ],
  templateUrl: './main-menu-component.html',
  styleUrl: './main-menu-component.css'
})
export class MainMenuComponent {

  constructor(private router: Router) {}

  goToSinistre() {
    this.router.navigate(['sinistre']).then();
  }

  goToSouscription() {
    this.router.navigate(['souscription']).then();
  }
}
