import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

    const[selected, setSelected] = useState(options[0]);

    return(
        <div>
            <Dropdown selected ={selected}
                      onSelectedChange={setSelected}
                      options={options}
            />
        </div>

    )
}

export default App;