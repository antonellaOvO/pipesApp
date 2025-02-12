export enum Color {
  red = 'rojo',
  black = 'black',
  blue = 'blue',
  green = 'green',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
