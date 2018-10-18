import { Printable } from '../models/index';

export function printString(...objects: Printable[]): void {
  console.log('=== Printing data ===');
  objects.forEach(obj => console.log(obj.asString()));
}
