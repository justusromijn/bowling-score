import { Roll, RollType } from './roll.model';
export class Frame {
  public isClosed = false;
  public bonusRounds = 0;
  public offset: number;
  public bonus = 0;
  private rolls: Roll[] = [];

  roll(pins) {
    if (!this.rolls.length) {
      // STRIKE
      if (pins === 10) {
        this.rolls.push(new Roll(RollType.STRIKE, pins));
        this.isClosed = true;
        this.bonusRounds = 2;
        return;
      }

      // REGULAR PINFALL (FIRST ROLL)
      this.rolls.push(new Roll(RollType.NORMAL, pins));
      return;
    }
    // SPARE
    if (this.rolls[0].pins + pins === 10) {
      this.rolls.push(new Roll(RollType.SPARE, pins));
      this.bonusRounds = 1;
      this.isClosed = true;
      return;
    }

    // REGULAR PINFALL (SECOND ROLL)
    this.rolls.push(new Roll(RollType.NORMAL, pins));
    this.isClosed = true;
    return;
  }

  get score() {
    if (this.isClosed && !this.bonusRounds && typeof this.offset === 'number') {
      return this.rolls.reduce(
        (prev, roll) => prev + roll.pins,
        this.offset + this.bonus
      );
    }
  }

  get remainingPins() {
    return this.rolls.reduce((prev, roll) => prev - roll.pins, 10);
  }
}
