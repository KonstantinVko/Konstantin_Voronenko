"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    let colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    let used={};
    console.log( 'цветов: ' + colorsCount );
    for (let i=1; i<=colorsCount; i++ ) {
        do let n=randomDiap(1,7);
        while ((n in used))
        used[n]=true;
        let colorName=colors[n];
        console.log( colorName );
    }
}

mood(3);