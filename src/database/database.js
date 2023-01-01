const db_elements = {
    asset_input: {
        label_name: 'Vídeo',
        input_placeholder: 'Insira o título do vídeo...',
        input_id: 'inp-asset-input',
        btn_content: 'Enviar',
        btn_id: 'btn-asset-input',
        enable: '',
    },
    tag_input: {
        label_name: 'Tags',
        input_placeholder: 'Insira as tags do asset...',
        input_id: 'inp-tag-input',
        btn_content: 'Enviar',
        btn_id: 'btn-tag-input',
        enable: 'disabled',
    },
    taglevel_input: {
        label_name: 'Nível da tag',
        input_placeholder: 'Insira a importância da  tag...',
        input_id: 'inp-taglevel-input',
        btn_content: 'Enviar',
        btn_id: 'btn-taglevel-input',
        enable: 'disabled',
    }
}

export const tag_details = [
    { level: 'basic',      color: 'hsl(120,87%,40%)' },
    { level: 'crucial',    color: 'hsl(80,87%,40%)' },
    { level: 'important',  color: 'hsl(50,87%,40%)' },
    { level: 'junior',     color: 'hsl(20,87%,40%)' },
    { level: 'advanced',   color: 'hsl(0,87%,40%)' },
]

/* * {
    color: hsl(90, 75%, 43%);
} */

export { db_elements }