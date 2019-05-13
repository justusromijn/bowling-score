import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roll-amount',
  templateUrl: './roll-amount.component.html',
  styleUrls: ['./roll-amount.component.scss']
})
export class RollAmountComponent implements OnInit {
  Arr = Array;
  @Input() pins: number;
  @Output() onRoll = new EventEmitter<number>();
  constructor() {}
  ngOnInit() {}

  roll(pins) {
    this.onRoll.emit(pins);
  }
}
