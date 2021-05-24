async function f1() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    return res.text();
}

async function f2() {
    const res = fetch('https://jsonplaceholder.typicode.com/todos/');
    return res.text();
}

async function f3() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(data => {
            return data.text()
        })
        .then(data => {
            console.log(data)
            console.log(3)
        })
}

async function go() {
    let a = await f1();
    let b = await f2();
    let c = await f3();
    console.log(a, b, c)
}

f1();
f2();
f3();