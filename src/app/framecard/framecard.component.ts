import { Frame } from '../frame.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-framecard',
  templateUrl: './framecard.component.html',
  styleUrls: ['./framecard.component.scss']
})
export class FramecardComponent implements OnInit {
  @Input() frame: Frame;
  constructor() {}

  ngOnInit() {}
}
