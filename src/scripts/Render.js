import { Elements } from "./Elements.js"

export const Render = {
    join(array, tag) {
        return array.reduce((acc, item) => {
            acc += Elements[tag](item)
            return acc
        }, ``)
    }
}


