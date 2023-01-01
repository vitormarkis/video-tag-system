export function tagContent(array, element_type) {
    return array.reduce((acc, item) => {
        acc += `<${element_type}>${item}</${element_type}>`
        return acc
    }, ``)
}

export function tagContentKeyTitle(array, element_type) {
    return array.reduce((acc, item) => {
        acc += `<${element_type} class="${item.level}" title="${item.level}">${item.name}</${element_type}>`
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