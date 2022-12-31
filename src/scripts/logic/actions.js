import { getDatabase, setDatabase } from "../../database/LocalStorage.js"
import { newAssetOBJ } from "./factories.js"
import { App } from '../App.js'

export function getElementValues() {
    let input_asset_value = document.querySelector('#inp-asset-input').value
    if(input_asset_value === '') return

    return {
        input_asset_value: input_asset_value
    }
}

export const addNewAsset = e => {
    let db = getDatabase('db_assets')
    let input = e.target.closest('.div-asset-input').querySelector('#inp-asset-input')
    let newAsset = newAssetOBJ(input.value)
    db.push(newAsset)
    setDatabase('db_assets', db)

    let content_body = App.init()
    document.body.innerHTML = content_body
}

export const toggleAssets = e => {
    const asset_tags_div = e.target.closest('.div-assets').querySelector('.asset-tags-div')
    asset_tags_div.classList.toggle('hidden')
}

export const actions = {
    remove: (id, db) => {
        let item = db.find(asset => asset.id == id)
        let index = db.indexOf(item)
        db.splice(index, 1)

        setDatabase('db_assets', db)

        document.body.innerHTML = App.init()

    }
}