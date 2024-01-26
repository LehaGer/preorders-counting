import { PreorderSet } from '../../types';
import { isPreorderElementsEqual } from '../isPreorderElementsEqual';

/**
 * 1. The empty set (a set containing no elements) is in T
 * */

export function isPreorderSetContainsEmptySet(currentPreorderSet: PreorderSet): boolean {

  return currentPreorderSet.some(value =>
    isPreorderElementsEqual(value, new Set([])));

}
