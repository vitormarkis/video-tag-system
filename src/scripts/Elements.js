import { tagContentKey } from "./Functionals.js"

export const Elements = {
    input({ asset_name, asset_placeholder, btn_content }) {
        return `
        <div class="div-asset-input">
            <label>${asset_name}</label>
            <input id="inp-asset-input" type="text" placeholder="${asset_placeholder}">
            <button id="btn-asset-input">${btn_content}</button>
        </div>
        `
    },
    asset({ id, asset_name, tags}) {
        let f_tags = tagContentKey(tags, 'span') 

        return `
        <div data-id="${id}" class="div-assets">
            <div class="asset-container-div">
                <p>${asset_name}</p>
                <button class="btn-remove-asset" data-id="remove-${id}">x</button>
            </div>
            <div class="asset-tags-div hidden">
                ${f_tags}
            </div>
        </div>
        `
    }
}

