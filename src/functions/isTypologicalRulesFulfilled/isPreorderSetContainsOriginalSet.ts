import {PreorderElement, PreorderSet} from "../../types";
import {isPreorderElementsEqual} from "../isPreorderElementsEqual";

/**
 * 2. X, the original set, is in T
 * */

export function isPreorderSetContainsOriginalSet(
    currentPreorderSet: PreorderSet,
    originalSet: PreorderElement,
): boolean {
    return currentPreorderSet.some(value =>
        isPreorderElementsEqual(value, originalSet))
}
