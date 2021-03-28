function buildWrapper(tag) {
    return function (text, arguments) {
        let argsArr = [];
        for (const [key, value] of Object.entries(arguments)) {
            argsArr.push(`${key}="${value}"`)
        }
        argsArr = argsArr.join(" ");
        console.log(argsArr);
        text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, '&apos;').replace(/"/g, '&quot;').replace(/&/g, '&amp;');
        argsArr = argsArr.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&/g, '&amp;').replace(/'/g, '&apos;');
        return `<${tag + ' ' + argsArr}>${text}</${tag}>`;
    };
}

let wrapH1 = buildWrapper('h1');

console.log(wrapH1("СТИХИ",{align:"center",title:"M&M's"}))