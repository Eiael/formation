import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css'
})
export class ButtonComponent {
  @Input() disabled: boolean = false;
  @Output() btnClick = new EventEmitter<void>();

  btnClicked() {
    this.btnClick.emit();
  }

}
