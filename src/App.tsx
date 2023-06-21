import { useState } from 'react';
import './App.css';
import data from './data.json';
import { useOrderBy } from './Hooks/useOrderBy';
import { useSum } from './Hooks/useSum';
import { useDistinct } from './Hooks/useDistinct';
import { useGroupBy } from './Hooks/useGroupBy';
import { Ioptions } from './Interfaces/OptionsInterface';

function App() {
    const [text, setText] = useState<string>();

    const handleButton = async (e: any) => {
        const option: string = e.target.id;
        const options: Ioptions = {
            order_by: useOrderBy(),
            sum_local_embarque: useSum('local-embarque'),
            sum_condicao_venda: useSum('condicao-venda'),
            group_by: useGroupBy(),
            distinct: useDistinct()
        };

        setText(await options[option]);
    };

    return (
        <>
            <div>
                <div className="json_text">
                    <div className="json">
                        <pre>
                            <code>{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    </div>
                    <h1 className="arrow">{'>'}</h1>
                    <div className="text">
                        <pre>
                            <code>{JSON.stringify(text, null, 2)}</code>
                        </pre>
                    </div>
                </div>

                <div className="buttons">
                    <button id="order_by" onClick={e => handleButton(e)}>
                        OrderBy enquadramento
                    </button>
                    <button id="sum_local_embarque" onClick={e => handleButton(e)}>
                        Somar valor local embarque
                    </button>
                    <button id="sum_condicao_venda" onClick={e => handleButton(e)}>
                        Somar valor condição venda
                    </button>
                    <button id="group_by" onClick={e => handleButton(e)}>
                        GroupBy enquadramento e trazer peso líquido
                    </button>
                    <button id="distinct" onClick={e => handleButton(e)}>
                        Distinct NCMs
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
