import { setDatabase } from "../database/LocalStorage.js"
import { Elements } from "./Elements.js"
import { getElementValues } from "./logic/actions.js"
import { newAssetOBJ, newTagOBJ } from "./logic/factories.js"

export const Render = {
    join(array, tag) {
        return array.reduce((acc, item) => {
            acc += Elements[tag](item)
            return acc
        }, ``)
    },
    printNewAsset(e, db) {
        const { input_asset } = getElementValues()
        if(input_asset.value === '') return
        
        let newAsset = newAssetOBJ(input_asset.value, db)
        db.push(newAsset)
        setDatabase('db_assets', db)
    },
    printNewTag(db) {
        const { input_tag, input_taglevel } = getElementValues()
        const id = input_tag.getAttribute('data-id')
        const index = db.indexOf(db.find(asset => asset.id == id))
        const new_obj = newTagOBJ(input_tag.value, input_taglevel.value)

        db[index].tags.unshift(new_obj)
        setDatabase('db_assets', db)
    },
    tagLevelInsert(params) {
        return `<div>X</div>`
    }
}


