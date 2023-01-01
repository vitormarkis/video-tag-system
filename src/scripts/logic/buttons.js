import { setDatabase } from "../../database/LocalStorage.js"
import { App } from "../App.js"
import { getElementValues } from "./actions.js"
import { newAssetOBJ, newTagOBJ } from "./factories.js"

export const button_action = {
    asset: (e, db) => {
        let input = e.target.closest('.div-asset-input').querySelector('#inp-asset-input')
        if(input.value === '') return
        
        let newAsset = newAssetOBJ(input.value, db)
        db.push(newAsset)
        setDatabase('db_assets', db)
    
        let content_body = App.init()
        document.body.innerHTML = content_body
    },
    tag: (e, db) => {
        const { input_tag } = getElementValues()
        const id = input_tag.getAttribute('data-id')
        const idx = db.indexOf(db.find(asset => asset.id == id))
        const new_obj = newTagOBJ(input_tag.value, 'important')

        db[idx].tags.unshift(new_obj)
        setDatabase('db_assets', db)
    
        let content_body = App.init()
        document.body.innerHTML = content_body
    },
}