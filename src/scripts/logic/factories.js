export function newAssetOBJ(asset_name, db) {
    let lastID = db[db.length - 1]?.id || 0
    
    return {
        asset_name,
        id: ++lastID,
        tags: []
    }
}

export function newTagOBJ(tag_name, tag_importance) {
    return {
        name: tag_name,
        level: tag_importance,
    }
}