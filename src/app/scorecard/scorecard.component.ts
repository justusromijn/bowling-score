import { Frame } from '../frame.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {
  public finalFrame: Frame;
  @Input() frames: Frame[];
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.finalFrame = this.frames[this.frames.length - 1];
  }
}
