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
    { level: 'basic',      color: '#006400' },
    { level: 'crucial',    color: '#0000ff' },
    { level: 'important',  color: '#ff8c00' },
    { level: 'junior',     color: '#7fff00' },
    { level: 'advanced',   color: '#8b008b' },
]

export { db_elements }