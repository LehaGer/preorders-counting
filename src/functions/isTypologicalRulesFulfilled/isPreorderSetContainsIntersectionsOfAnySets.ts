import {PreorderSet} from "../../types";
import {isPreorderElementsEqual} from "../isPreorderElementsEqual";

/**
 * 3. The intersection of a finite number of sets T is also in T
 *
 * [
 *    new Set([]),
 *    new Set([1, 2, 3]),
 *    new Set([1, 2]),
 *    new Set([2, 3]),
 *    // new Set([2]),
 * ]
 * */

export function isPreorderSetContainsIntersectionsOfAnySets(currentPreorderSet: PreorderSet): boolean {
    return currentPreorderSet.every((preorderEl1, index1, array) => {
        return array.every((preorderEl2, index2) => {
            if(index2 <= index1) return true;
            const intersectionElementChunks = [...preorderEl1].filter(elChunk =>
                [...preorderEl2].includes(elChunk))
            const intersection = new Set(intersectionElementChunks);
            return array.some(value => isPreorderElementsEqual(
                value,
                intersection,
            ))
        })
    })
}
