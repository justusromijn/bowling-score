import { Injectable } from '@angular/core';
import { Frame } from './frame.model';
import { FinalFrame } from './finalFrame.model';

// gameFrames.push(new FinalFrame());

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public frames: Array<Frame | FinalFrame>;
  public hasGame = false;
  private currentFrame: number;

  constructor() {}

  start() {
    this.hasGame = true;
    this.frames = [];
    for (let i = 0; i < 9; i++) {
      this.frames.push(new Frame());
    }
    this.frames.push(new FinalFrame());
    this.currentFrame = 0;
  }

  roll(pins: number) {
    const frame = this.frames[this.currentFrame];
    if (!frame) {
      return;
    }
    this.applyBonuses(pins);
    frame.roll(pins);

    this.calculateFrameScores();
    if (frame.isClosed) {
      this.currentFrame++;
    }
    if (this.frames.every(({ isClosed }) => isClosed)) {
      this.hasGame = false;
    }
  }

  applyBonuses(pins) {
    this.frames
      .filter(({ bonusRounds }) => bonusRounds)
      .forEach((frame) => {
        frame.bonus += pins;
        frame.bonusRounds--;
      });
  }

  calculateFrameScores() {
    this.frames.reduce((prev, curr) => {
      if (!prev) {
        curr.offset = 0;
        return curr;
      }
      if (prev.score) {
        curr.offset = prev.score;
      }
      return curr;
    }, undefined);
  }

  remainingPins() {
    return (
      this.frames[this.currentFrame] &&
      this.frames[this.currentFrame].remainingPins
    );
  }
}
