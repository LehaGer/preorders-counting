import { ElemType, PreordersVariations } from '../types';
import { getAllPossibleElementsIndependently } from './getAllPossibleElementsIndependently';
import { isPreorderElementsEqual } from './isPreorderElementsEqual';
import { isTypologicalRulesFulfilled } from './isTypologicalRulesFulfilled';
import { computeAllPossibleVariationsForConstLength } from './computeAllPossibleVariationsForConstLength';

export function computePreorders(elementsOfSetT: ElemType[]): PreordersVariations {

  const allPossibleElementsIndependently =
        getAllPossibleElementsIndependently(elementsOfSetT);

  const nonEdgePossibleElements = allPossibleElementsIndependently
    .filter(element =>
      !isPreorderElementsEqual(element, new Set())
            && !isPreorderElementsEqual(element, new Set(elementsOfSetT)));

  const preorders: PreordersVariations = [[
    new Set([]),
    new Set(elementsOfSetT),
  ]];

  for (let i = nonEdgePossibleElements.length; i > 0; i--) {

    const allPossibleVariationsForConstLength =
            computeAllPossibleVariationsForConstLength(nonEdgePossibleElements, i)
              .map(value => [
                new Set([]),
                new Set(elementsOfSetT),
              ].concat(value));

    preorders.push(...allPossibleVariationsForConstLength);

  }

  const indexesOfWrongSets: number[] = [];

  preorders.forEach((value, index, array) => {

    if (isTypologicalRulesFulfilled(value, new Set(elementsOfSetT))) return;

    indexesOfWrongSets.push(index);

  });

  indexesOfWrongSets.forEach((value, index, array) => {

    preorders.splice(value - index, 1);

  });

  return preorders;

}
