import {PreorderElement, PreorderSet} from "../../types";
import {isPreorderSetContainsEmptySet} from "./isPreorderSetContainsEmptySet";
import {isPreorderSetContainsOriginalSet} from "./isPreorderSetContainsOriginalSet";
import {isPreorderSetContainsIntersectionsOfAnySets} from "./isPreorderSetContainsIntersectionsOfAnySets";
import {isPreorderSetContainsUnionOfAnySets} from "./isPreorderSetContainsUnionOfAnySets";

/**
 * A topological space is a set X with well defined, open subsets T which have four special properties:
 *
 * 1. The empty set (a set containing no elements) is in T
 * 2. X, the original set, is in T
 * 3. The intersection of a finite number of sets T is also in T
 * 4. The union of an arbitrary number of sets in T is also in T
 * */

export function isTypologicalRulesFulfilled(
    currentPreorderSet: PreorderSet,
    originalSet: PreorderElement,
): boolean {
    return isPreorderSetContainsEmptySet(currentPreorderSet)
        && isPreorderSetContainsOriginalSet(currentPreorderSet, originalSet)
        && isPreorderSetContainsIntersectionsOfAnySets(currentPreorderSet)
        && isPreorderSetContainsUnionOfAnySets(currentPreorderSet)
}
