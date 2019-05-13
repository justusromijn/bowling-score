import { FinalFrame } from './finalFrame.model';
import { Frame } from './frame.model';
import { Component } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The Bowling Score app';
  hasGame = false;
  remainingPins: number;
  frames: Array<Frame | FinalFrame>;

  constructor(public scoreService: ScoreService) {}

  newGame() {
    this.scoreService.start();
    this.frames = this.scoreService.frames;
    this.remainingPins = this.scoreService.remainingPins();
    this.hasGame = this.scoreService.hasGame;
  }
  onRoll(pins) {
    this.scoreService.roll(pins);
    this.remainingPins = this.scoreService.remainingPins();
    this.hasGame = this.scoreService.hasGame;
  }
}
