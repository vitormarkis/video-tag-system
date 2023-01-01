import { tag_details } from "../database/database.js"
import { getDatabase } from "../database/LocalStorage.js"

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

export function sortTags(tag_array) {
        return tag_array.sort((a, b) => (a.level < b.level) ? 1 : -1)
}

export function resetTagColors(db) {
    return db.reduce((acc, item) => {
        let tag_array_updated_colors = item.tags.reduce((acc, item) => {
            let new_color_tag = tag_details.find(tag_detail => tag_detail.level === item.level)
            let updated_colors = { ...item, ...new_color_tag }

            acc.push(updated_colors)
            return acc
        },[])
        item['tags'] = tag_array_updated_colors
        acc.push(item)
        return acc
    }, [])
}

export function sortTagsDB(db) {
    return db.reduce((acc, item) => {
        let updated_tags = sortTags(item.tags) 
        item.tags = updated_tags
        
        acc.push(item)
        return acc
    }, [])
}

export async function refreshDB(db_name) {
    let db = await getDatabase(db_name)
    let sorted_db = sortTagsDB(db)
    return resetTagColors(sorted_db)
}



// export function joinElements()