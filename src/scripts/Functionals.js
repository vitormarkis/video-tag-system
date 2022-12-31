export function tagContent(array, element_type) {
    return array.reduce((acc, item) => {
        acc += `<${element_type}>${item}</${element_type}>`
        return acc
    }, ``)
}

export function tagSource(array, element_type) {
    return array.reduce((acc, item) => {
        acc += `<${element_type} src="${item}">`
        return acc
    }, ``)
}

// export function joinElements()