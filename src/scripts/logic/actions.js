import { setDatabase } from "../../database/LocalStorage.js"
import { App } from '../App.js'

export const getElementValues = () => ({
    input_asset: document.querySelector('#inp-asset-input'),
    input_tag: document.querySelector('#inp-tag-input'),
})

export const toggleAssets = (div_assets) => {
    let asset_tags_div = div_assets.querySelector('.asset-tags-div')
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
