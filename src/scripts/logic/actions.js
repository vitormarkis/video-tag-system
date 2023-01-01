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

setDatabase('db_assets', [
    {
        "id": 2,
        "asset_name": "Aula 002 - Projeto Interface Uber",
        "tags": [
            {
                name: "Arrow Functions",
                level: "important",
            },
            {
                name: "map() method",
                level: "basic",
            },
            {
                name: "filter() method",
                level: "crucial",
            },
        ]
    },
    {
        "id": 3,
        "asset_name": "Aula 003 - Calculadora Mágica",
        "tags": [
            {
                name: "Arrow Functions",
                level: "basic",
            },
            {
                name: "map() method",
                level: "basic",
            },
            {
                name: "filter() method",
                level: "basic",
            },
        ]
    },
    {
        "id": 4,
        "asset_name": "Aula 004 - Como criar APIs",
        "tags": [
            {
                name: "Arrow Functions",
                level: "basic",
            },
            {
                name: "map() method",
                level: "basic",
            },
            {
                name: "filter() method",
                level: "basic",
            },
        ]
    }
])