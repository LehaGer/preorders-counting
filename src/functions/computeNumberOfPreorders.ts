import {computePreorders} from "./computePreorders";
import {PreordersVariations} from "../types";

export function computeNumberOfPreorders(n: number): number[] {

    const arrayOfN = Array(n + 1)
        .fill(undefined)
        .map((_, index) => index);

    const preordersForEachSet: PreordersVariations[] = arrayOfN.map(value => {

        const originalSetForPreordersComputing =
            Array(value)
                .fill(undefined)
                .map((_, index) => index + 1);

        return computePreorders(originalSetForPreordersComputing)

    })

    return preordersForEachSet
        .map(preordersVariations => preordersVariations.length)
}
