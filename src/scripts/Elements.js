import { tagContentKeyTitle } from "./Functionals.js"

export const Elements = {
    input(params) {
        return `
        <div class="div-asset-input">
            <label>${params.label_name}</label>
            <input id="${params.input_id}" type="text" placeholder="${params.input_placeholder}" ${params.enable}>
            <button id="${params.btn_id}">${params.btn_content}</button>
        </div>
        `
    },
    asset({ id, asset_name, tags}) {
        let f_tags = tagContentKeyTitle(tags, 'span') 

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

