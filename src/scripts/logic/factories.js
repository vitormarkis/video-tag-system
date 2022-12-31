import { getDatabase } from "../../database/LocalStorage.js"

export function newAssetOBJ(asset_name) {
    let db = getDatabase('db_assets')
    let lastID = db[db.length - 1].id
    
    return {
        asset_name,
        id: ++lastID,
        tags: []
    }
}