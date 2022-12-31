import { getDatabase } from "../../database/LocalStorage.js";
import { actions, addNewAsset, toggleAssets } from "./actions.js";


document.addEventListener('click', event => {
    const db = getDatabase('db_assets')

    const eventID = event.target.id
    const eventCLASS = Array.from(event.target.classList)
    const eventDATAID = event.target.getAttribute('data-id')?.split('-') ?? ''

    
    const div_assets = eventCLASS.includes('asset-container-div')

    const [action, id] = eventDATAID
    
    if (eventDATAID.length === 2) actions[action](id, db)
    if (eventID === 'btn-asset-input') addNewAsset(event)
    if (div_assets) toggleAssets(event)
})