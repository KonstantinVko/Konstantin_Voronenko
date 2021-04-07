import React, {useState} from "react";
import ReactDOM from "react-dom";


export default function App() {

    function InputFormComponent(props) {
        props = props.kind

        if (props.kind === 'longtext' || props.kind === 'shorttext') {
            return <p><label>{props.label} </label><input type={'text'} name={props.name} className={props.kind}/></p>
        } else if (props.kind === 'number') {
            return <p><label>{props.label} </label><input type={'number'} name={props.name} className={props.kind}/></p>
        } else if (props.kind === 'combo') {
            let variants = props.variants;
            return <p><label>{props.label} </label>
                <select>
                    {variants.map((el) => (
                        <option value={el.value}>{el.text}</option>
                    ))}
                </select>
            </p>
        } else if (props.kind === 'radio') {
            let variants = props.variants;
            return <p><label>{props.label} </label>
                {variants.map((el) => (
                    <span>
                    <input type="radio" value={el.value} name={'test'}/> <label>{el.text}</label>
                    </span>
                ))}
            </p>
        }
        else if (props.kind === 'check') {
            return <span><label>{props.label}</label><input type="checkbox"/></span>
        }
        else if (props.kind === 'memo') {
            return <p>
                <label>{props.label}</label>
                <br/>
                <textarea name={props.name}/>
            </p>

        }
        else if (props.kind === 'submit') {
            return <input type="submit" value={props.label} />
        }
        else return null;
    }

    const formDef1 =
        [
            {label: 'Название сайта:', kind: 'longtext', name: 'sitename'},
            {label: 'URL сайта:', kind: 'longtext', name: 'siteurl'},
            {label: 'Посетителей в сутки:', kind: 'number', name: 'visitors'},
            {label: 'E-mail для связи:', kind: 'shorttext', name: 'email'},
            {
                label: 'Рубрика каталога:', kind: 'combo', name: 'division',
                variants: [
                    {text: 'здоровье', value: 1},
                    {text: 'домашний уют', value: 2},
                    {text: 'бытовая техника', value: 3}
                ]
            },
            {
                label: 'Размещение:', kind: 'radio', name: 'payment',
                variants: [
                    {text: 'бесплатное', value: 1},
                    {text: 'платное', value: 2},
                    {text: 'VIP', value: 3}]
            },
            {label: 'Разрешить отзывы:', kind: 'check', name: 'votes'},
            {label: 'Описание сайта:', kind: 'memo', name: 'description'},
            {label: 'Опубликовать:', kind: 'submit'},
        ];

    const [data, setData] = useState([]);

    const createForm = () => {
        setData(formDef1);
    };

    const deleteForm = () => {
        setData([]);
    };

    return (
        <div>
            <button onClick={createForm}>Создать форму</button>
            <button onClick={deleteForm}>Удалить форму</button>

            <div id="content">
                <form method="POST" action="https://fe.it-academy.by/TestForm.php">
                {data.map((input) => (
                    <InputFormComponent kind={input}/>
                ))}
                </form>
            </div>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"));