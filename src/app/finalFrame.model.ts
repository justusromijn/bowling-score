import { Roll, RollType } from './roll.model';
export class FinalFrame {
  public isClosed = false;
  public offset: number;
  public bonus = 0;
  public bonusRounds = 0;
  private rolls: Roll[] = [];

  roll(pins) {
    switch (this.rolls.length) {
      case 0:
        // STRIKE or NORMAL
        this.rolls.push(
          new Roll(pins === 10 ? RollType.STRIKE : RollType.NORMAL, pins)
        );
        break;
      case 1:
        // SECOND STRIKE or NORMAL
        if (this.rolls[0].type === RollType.STRIKE) {
          this.rolls.push(
            new Roll(pins === 10 ? RollType.STRIKE : RollType.NORMAL, pins)
          );
          // SPARE
        } else if (this.rolls[0].pins + pins === 10) {
          this.rolls.push(new Roll(RollType.SPARE, pins));
          // NORMAL, SO NO BONUS
        } else {
          this.rolls.push(new Roll(RollType.NORMAL, pins));
          this.isClosed = true;
        }
        break;
      case 2:
        // BONUS ROUND BASED ON STRIKE IN FIRST ROLL
        // SO SPARE OR NORMAL
        if (this.rolls[1].type === RollType.NORMAL) {
          this.rolls.push(
            new Roll(
              this.rolls[1].pins + pins === 10
                ? RollType.SPARE
                : RollType.NORMAL,
              pins
            )
          );

          // BONUS BECAUSE SPARE OR 2 STRIKES, SO STRIKE OR NORMAL
        } else {
          this.rolls.push(
            new Roll(pins === 10 ? RollType.STRIKE : RollType.NORMAL, pins)
          );
        }
        this.isClosed = true;
        break;
      default:
        console.warn('invalid roll');
    }
  }

  get score() {
    if (this.isClosed && typeof this.offset === 'number') {
      return this.rolls.reduce(
        (prev, roll) => prev + roll.pins,
        this.offset + this.bonus
      );
    }
  }

  get remainingPins() {
    return this.rolls.reduce((prev, roll) => prev - roll.pins || 10, 10);
  }
}
