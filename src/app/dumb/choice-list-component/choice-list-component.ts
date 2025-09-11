import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

export interface SinistreChoice {
  id: number;
  label: string;
}

@Component({
  selector: 'app-choice-list-component',
  imports: [
    NgClass
  ],
  templateUrl: './choice-list-component.html',
  styleUrl: './choice-list-component.css'
})
export class ChoiceListComponent {
  @Input({ required: true }) choices!: SinistreChoice[];
  @Input() selectedChoice!: number | undefined;
  @Output() choiceChanged = new EventEmitter<number>();

  choiceClick(id: number) {
    if (id === this.selectedChoice) return;
    this.choiceChanged.emit(id);
  }
}
