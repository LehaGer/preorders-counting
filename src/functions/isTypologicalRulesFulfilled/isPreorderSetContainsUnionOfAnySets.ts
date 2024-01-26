import {PreorderSet} from "../../types";
import {isPreorderElementsEqual} from "../isPreorderElementsEqual";

/**
 * 4. The union of an arbitrary number of sets in T is also in T
 * */

export function isPreorderSetContainsUnionOfAnySets(currentPreorderSet: PreorderSet): boolean {
    return currentPreorderSet.every((preorderEl1, index1, array) => {
        return array.every((preorderEl2, index2) => {
            if(index2 <= index1) return true;
            const intersection = new Set([...preorderEl1].concat([...preorderEl2]));
            return array.some(value => isPreorderElementsEqual(
                value,
                intersection,
            ))
        })
    })
}
