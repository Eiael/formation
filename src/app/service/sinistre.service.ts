import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SinistreService {

  private tarif: number | undefined = undefined;

  resetTarif() {
    this.tarif = undefined;
  }

  calcTarif(choices: number[]) {
    if (choices[3] === 1 && choices[4] === 3) return -1;

    let calc = 0;
    if (choices[0] === 2) calc += 100;
    if (choices[1] === 2) calc += 200;
    if (choices[1] === 3) calc += 500;
    if (choices[2] === 1) calc += 200;
    if (choices[3] === 1) calc += 1000;
    if (choices[4] === 2) calc += 1000;
    if (choices[4] === 3) calc += 5000;

    return calc;
  }

  getTarif() {
    return this.tarif;
  }

  saveTarif(finalTarif: number) {
    this.tarif = finalTarif;
  }
}
