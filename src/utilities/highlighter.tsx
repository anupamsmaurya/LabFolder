export default function highlighter(input: string | null, searchterm: string) {
    if(!input) return input
    let searchRegex = new RegExp(searchterm, "igm");
    return input.replace(searchRegex, function(string) {return `<span class='highlighted-text'>${string}</span>`})
}
