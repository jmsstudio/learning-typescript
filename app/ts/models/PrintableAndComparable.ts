import { Printable } from './Printable';
import { Comparable } from './Comparable';

export interface PrintableAndComparable<T> extends Printable, Comparable<T> {}
