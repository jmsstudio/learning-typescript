import { Printable } from '../models/Printable';

export function printString(...objects: Printable[]): void {
  console.log('=== Printing data ===');
  objects.forEach(obj => console.log(obj.asString()));
}
