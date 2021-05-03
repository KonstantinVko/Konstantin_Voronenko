const arr = [ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ];


function list(names){
    let result = [];
    for (let i = 0; i < names.length - 1; i++) {
        result.push(names[i].name + ', ');
    }
    return result.join('');
}

console.log(list(arr))