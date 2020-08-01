import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';

const items = [
    {
        title: "What is React",
        content: "React is a front end framework"
    },
    {
        title: 'Why use react',
        content: "It is a favorite librabry"
    },
    {
        title:"How to use React",
        content:"It is very easy"

    }
]


const options = [
    {
        label:'The Color Red',
        value: 'red'
    },
    {
        label:'The Color Green',
        value:'green'   
    },
    {
        label:'The Shade of Blue',
        value:'blue'
    }
]



const App = () =>{

    const [selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown 
                    options={options}
                    label="Select a Color"
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path="/translate">
                <Translate options={options} />
            </Route>
        </div>

    )
}

export default App;