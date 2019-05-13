import { Frame } from '../frame.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-final-framecard',
  templateUrl: './final-framecard.component.html',
  styleUrls: ['./final-framecard.component.scss']
})
export class FinalFramecardComponent implements OnInit {
  @Input() frame: Frame;
  constructor() {}

  ngOnInit() {}
}
