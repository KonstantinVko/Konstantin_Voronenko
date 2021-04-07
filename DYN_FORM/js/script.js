let app = document.getElementById('app');

let formDef1 =
    [
        {label:'Название сайта:',kind:'longtext',name:'sitename'},
        {label:'URL сайта:',kind:'longtext',name:'siteurl'},
        {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
        {label:'E-mail для связи:',kind:'shorttext',name:'email'},
        {label:'Рубрика каталога:',kind:'combo',name:'division',
            variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
        {label:'Размещение:',kind:'radio',name:'payment',
            variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
        {label:'Разрешить отзывы:',kind:'check',name:'votes'},
        {label:'Описание сайта:',kind:'memo',name:'description'},
        {label:'Опубликовать:',kind:'submit'},
    ];

let formDef2=
    [
        {label:'Фамилия:',kind:'longtext',name:'lastname'},
        {label:'Имя:',kind:'longtext',name:'firstname'},
        {label:'Отчество:',kind:'longtext',name:'secondname'},
        {label:'Возраст:',kind:'number',name:'age'},
        {label:'Зарегистрироваться:',kind:'submit'},
    ];

let formsCounter = 0;

function createForm(data) {
    app.innerHTML += '<form action="https://fe.it-academy.by/TestForm.php" method="POST" target="_blank">' + '</form>'
    for (let i = 0; i < data.length; i++) {
        let str = ''
        if (data[i].kind === 'longtext' || data[i].kind === 'shorttext'){
            str = '<label>' + data[i].label + '</label> \n' +
                '<input class="'+ data[i].kind +'" type="text" name=' + data[i].name + '>' + '<br>'
        }
        else if (data[i].kind === 'number') {
            str = '<label>' + data[i].label + '</label> \n' +
                '<input type="number" name=' + data[i].name + '>' + '<br>'
        }
        else if (data[i].kind === 'check') {
            str = '<label>' + data[i].label + '</label> \n' +
                '<input type="checkbox" name=' + data[i].name + '>' + '<br>'
        }
        else if (data[i].kind === 'memo') {
            str = '<label>' + data[i].label + '</label> \n' +
                '<textarea name=' + data[i].name + '> </textarea>' + '<br/>'
        }
        else if (data[i].kind === 'submit') {
            str = '<label>' + data[i].label + '</label> \n' +
                '<input type="submit" name=' + data[i].name + '>' + '<br>'
        }
        else if (data[i].kind === 'combo') {
            let vars = data[i].variants;
            let options = '';
            for (let j = 0; j < vars.length; j++) {
                options += '<option value="' +vars[j].value + '">' + vars[j].text + '</option>'
            }
            str = '<label>' + data[i].label + '</label> \n' +
                '<select>' + options +'</select>' + '<br>'
        }
        else if (data[i].kind === 'radio') {
            let vars = data[i].variants;
            let optionInputs = '';
            for (let j = 0; j < vars.length; j++) {
                optionInputs += '<label>' + vars[j].text + '</label><input type="radio"/>'
            }
            str = '<label>' + data[i].label + '</label> \n' +
                optionInputs + '<br/>'
        }
        else {
            return console.log('error');
        }
        document.forms[formsCounter].innerHTML += str;
    }
    formsCounter++;
}