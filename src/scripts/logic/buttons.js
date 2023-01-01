import { App } from "../App.js"
import { Render } from "../Render.js"

export const button_action = {
    asset: (e, db) => {
        console.log(db)
        Render.printNewAsset(e, db)
    
        document.body.innerHTML = App.init()
    },
    taglevel: (e, db) => {
        Render.printNewTag(db)

        document.body.innerHTML = App.init()
    },
}