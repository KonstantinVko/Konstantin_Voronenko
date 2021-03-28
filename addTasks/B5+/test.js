let obj =
{
    lang:"ru",
    mango: 'neru'
}
let testarr = [];
for (const [key, value] of Object.entries(obj)) {
    console.log(key, value);
    testarr.push(key + "='" + value + "'")
}