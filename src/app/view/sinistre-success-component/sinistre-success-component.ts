import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SinistreService} from '../../service/sinistre.service';

@Component({
  selector: 'app-sinistre-success-component',
  imports: [
    RouterLink
  ],
  templateUrl: './sinistre-success-component.html',
  styleUrl: './sinistre-success-component.css'
})
export class SinistreSuccessComponent {

  protected tarif: number = 0;

  constructor(private sinistreService: SinistreService) {
  }

  ngOnInit() {
    this.tarif = this.sinistreService.getTarif() ?? 0;
  }

}
