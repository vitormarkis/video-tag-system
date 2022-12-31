import { db_elements } from "../database/database.js"
import { getDatabase } from "../database/LocalStorage.js"
import { Elements } from "./Elements.js"
import { Render } from "./Render.js"

export const App = {
    init() {
    let db = getDatabase('db_assets')
    document.body.innerHTML = ''
    return `
    <main>
    ${Elements.input(db_elements.asset_input)}
        <div class="assets-container">
            ${Render.join(db, 'asset')}
        </div>
    </main>
   `
    }
}

