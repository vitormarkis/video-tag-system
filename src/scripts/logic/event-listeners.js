import { getDatabase } from "../../database/LocalStorage.js";
import { actions, getElementValues, toggleAssets } from "./actions.js";
import { button_action } from "./buttons.js";
import { checkHiddens } from "./midfielder.js";


document.addEventListener('click', event => {
    const db = getDatabase('db_assets')

    const eventID = event.target.id
    const btn_action = event.target.id.split('-')
    const eventCLASS = Array.from(event.target.classList)
    const eventDATAID = event.target.getAttribute('data-id')?.split('-') ?? ''
    
    
    const div_assets = eventCLASS.includes('asset-container-div')

    const [action, id] = eventDATAID
    
    if(btn_action[0] === 'btn') button_action[btn_action[1]](event, db)

    if (eventDATAID.length === 2) actions[action](id, db)
    if (div_assets) {
        const asset_tags_div = event.target.closest('.div-assets')
        const divs = Array.from(document.querySelectorAll('.asset-tags-div'))
        const { input_tag } = getElementValues()
        toggleAssets(asset_tags_div)
        const { enabled, element } = checkHiddens(divs)
        
        if(enabled) {
            const id = element.closest('.div-assets').getAttribute('data-id')
            input_tag.disabled = false;
            input_tag.setAttribute('data-id', String(id))
        } else {
            input_tag.disabled = true;
        }
    }
})