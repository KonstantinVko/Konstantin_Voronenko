function buildWrapper(tag) {
    return function (text) {
        text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/&/g, '&amp;');
        return `<${tag}>${text}</${tag}>`;
    };
}

let wrapP = buildWrapper('p');

console.log(wrapP("Вкусные M&M's"));