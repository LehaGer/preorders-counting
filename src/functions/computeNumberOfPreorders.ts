import {computePreorders} from "./computePreorders";
import {PreordersVariations, PreorderSet} from "../types";
import * as console from "console";

export function computeNumberOfPreorders(n: number): number[] {

    const arrayOfN = Array(n + 1)
        .fill(undefined)
        .map((_, index) => index);

    const preordersForEachSet: PreordersVariations[] = arrayOfN.map(value => {
        const originalSetForPreordersComputing =
            Array(value)
                .fill(undefined)
                .map((_, index) => index + 1);

        // console.log({arrayOfN, originalSetForPreordersComputing});

        return computePreorders(originalSetForPreordersComputing)
    })

    return preordersForEachSet
        .map(preordersVariations => preordersVariations.length)
}
