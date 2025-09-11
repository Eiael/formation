import { Component } from '@angular/core';
import {ChoiceListComponent, SinistreChoice} from '../../dumb/choice-list-component/choice-list-component';
import {SinistreService} from '../../service/sinistre.service';
import {Router} from '@angular/router';
import {ButtonComponent} from '../../dumb/button-component/button-component';

@Component({
  selector: 'app-sinistre-component',
  imports: [
    ChoiceListComponent,
    ButtonComponent
  ],
  templateUrl: './sinistre-component.html',
  styleUrl: './sinistre-component.css'
})
export class SinistreComponent {

  protected tarif: number = 0;

  protected questionChoicesList: SinistreChoice[][] = [
    [{ id: 1, label: 'Oui' }, { id: 2, label: 'Non' }],
    [{ id: 1, label: 'Bon état' }, { id: 2, label: 'Pas ouf' }, { id: 3, label: 'Bof' }],
    [{ id: 1, label: 'Oui' }, { id: 2, label: 'Non' }],
    [{ id: 1, label: 'Oui' }, { id: 2, label: 'Non' }],
    [{ id: 1, label: 'Non' }, { id: 2, label: 'Un ou deux' }, { id: 3, label: 'Plus de trois' }]
  ]

  protected choices: number[] = [1, 1, 1, 1, 1];

  get runForYourLife() { return this.choices[3] === 1 && this.choices[4] === 3; }

  constructor(private sinistreService: SinistreService, private router: Router) {
  }

  ngOnInit() {
    this.sinistreService.resetTarif();
    this.tarif = this.sinistreService.calcTarif(this.choices);
  }

  onChoiceChanged(index: number, choice: number) {
    this.choices[index] = choice;
    this.tarif = this.sinistreService.calcTarif(this.choices);
  }

  submit() {
    this.sinistreService.saveTarif(this.tarif);
    this.router.navigate(['sinistre-success']).then();
  }
}
