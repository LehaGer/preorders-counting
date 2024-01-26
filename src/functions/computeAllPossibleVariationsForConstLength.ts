import { PreorderElement } from '../types';

export function computeAllPossibleVariationsForConstLength(
  availableValues: PreorderElement[],
  countOfElems: number,
): PreorderElement[][] {

  const arr: PreorderElement[][] = [];

  for (let i = 0; i < availableValues.length; i++) {

    if (countOfElems === 1) {

      arr.push([availableValues[i]]);

    } else {

      const resultOfPrev = computeAllPossibleVariationsForConstLength(
        availableValues.filter((_, index) => index > i),
        countOfElems - 1,
      );

      const valuesForCurrentIteration = resultOfPrev.map((value) => [availableValues[i]].concat(value));

      arr.push(...valuesForCurrentIteration);

    }

  }

  return arr;

}
