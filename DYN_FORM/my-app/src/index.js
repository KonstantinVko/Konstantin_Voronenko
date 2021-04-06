import React, {useState} from "react";
import ReactDOM from "react-dom";



export default function App() {

    function InputFormComponent(props) {
        if (props.kind === 'longtext' || props.kind === 'shorttext') {
            return <p><label>{props.label} </label><input type={'text'} name={props.name} className={props.kind}/></p>
        }
        else if (props.kind === 'number') {
            return <p><label>{props.label} </label><input type={'number'} name={props.name} className={props.kind}/></p>
        }
        else if (props.kind === 'combo') {
            return <p><label>{props.label} </label><input type={'select'} name={props.name} className={props.kind}/></p>
        }
        else return null
    }
    // this is your data store (can also be any external data source
    const formDef1=
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

    // this is your component state, you can think of it as the live data within the component which may change along the lifecycle of the component
    const [data, setData] = useState([]);

    // this is the function that will be called to show formDef1 by *just updating the state* and React will take care of re-rendering the component for us
    const createForm = () => {
        setData(formDef1);
    };

    // this is the function that will be called to hide formDef1 showed previously by *just updating the state as well* and React will take care once again of re-rendering the component for us
    const deleteForm = () => {
        setData([]);
    };

    return (
        <div>
            <button onClick={createForm}>Show</button>
            <button onClick={deleteForm}>Hide</button>

            <div id="content">
                {data.map((input) => (
                    <InputFormComponent kind={input.kind}/>
                ))}
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"));