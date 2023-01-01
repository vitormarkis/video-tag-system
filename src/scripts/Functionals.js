export function tagContent(array, element_type) {
    return array.reduce((acc, item) => {
        acc += `<${element_type}>${item}</${element_type}>`
        return acc
    }, ``)
}

export function tagContentKeyTitle(array, element_type) {
    return array.reduce((acc, item) => {
        acc += `<${element_type} class="${item.level}" title="${item.level}" style="background-color: ${item.color}">${item.name}</${element_type}>`
        return acc
    }, ``)
}

export function tagSource(array, element_type) {
    return array.reduce((acc, item) => {
        acc += `<${element_type} src="${item}">`
        return acc
    }, ``)
}

export function transformStringToHTML(string_element) {
    const div = document.createElement('div')
    div.insertAdjacentHTML('afterbegin', string_element)
    return div.firstChild
}

export function sortTags(db) {
    return db.map(asset => {
        return asset.tags.sort((a, b) => (a.level < b.level) ? 1 : -1)
    })
}

// export function joinElements()