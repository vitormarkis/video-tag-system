export function checkHiddens(divs) {
    let actual_div = divs.reduce((acc, div, idx) => {
        if (!Array.from(div.classList).includes('hidden')) {
            acc.push(div)
        }
        return acc
    }, [])

    if(actual_div.length === 1) {
            return {
            enabled: true,
            element: actual_div[0]
        }
    }
    return false
}