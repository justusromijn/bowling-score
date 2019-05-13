export enum RollType {
  STRIKE = 'STRIKE',
  SPARE = 'SPARE',
  NORMAL = 'NORMAL'
}

export class Roll {
  public type: RollType;
  public pins: number;
  constructor(type, pins) {
    this.type = type;
    this.pins = pins;
  }
}
