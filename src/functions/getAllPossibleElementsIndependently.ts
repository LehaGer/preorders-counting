import {ElemType, PreorderElement} from "../types";

export function getAllPossibleElementsIndependently(primitiveElements: ElemType[]): PreorderElement[] {

    const elements: Set<ElemType>[] = [new Set()];

    for (const primEl of primitiveElements) {
        const last = elements.length - 1;
        for (let i = 0; i <= last; i++) {
            elements.push(new Set([...elements[i], primEl]))
        }
    }

    return elements;
}
