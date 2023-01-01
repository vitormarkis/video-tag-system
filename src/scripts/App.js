import { db_elements } from "../database/database.js"
import { getDatabase } from "../database/LocalStorage.js"
import { Elements } from "./Elements.js"
import { sortTags } from "./Functionals.js"
import { Render } from "./Render.js"

export const App = {
    init() {
    let db = getDatabase('db_assets')
    document.body.innerHTML = ''
    sortTags(db)
    return `
    <main>
        <div class="div-asset-input">
            ${Elements.input(db_elements.asset_input)}
        </div>
        <div id="div-tag-input-container">
            <div class="div-asset-input">
                ${Elements.input(db_elements.tag_input)}

            <div class="div-asset-input">
                ${Elements.input(db_elements.taglevel_input)}
            </div>
        </div>
        <div class="assets-container">
            ${Render.join(db, 'asset')}
        </div>
    </main>
   `
    }
}

