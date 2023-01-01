import { db_elements } from "../database/database.js"
import { Elements } from "./Elements.js"
import { refreshDB } from "./Functionals.js"
import { Render } from "./Render.js"

export const App = {
    async init() {
    let db = await refreshDB('db_assets')

    document.body.innerHTML = `
    <main>
        <div id="div-asset-input-container">
            <div class="div-asset-input">
                ${Elements.input(db_elements.asset_input)}
            </div>
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