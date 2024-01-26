import { PreorderElement } from '../types';

export function isPreorderElementsEqual(
  element1: PreorderElement,
  element2: PreorderElement,
): boolean {

  return element1.size === element2.size
        && [...element1].every(setVal => element2.has(setVal));

}
