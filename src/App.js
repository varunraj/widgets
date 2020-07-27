import React from 'react'
import Accordion from './components/Accordion';

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


const App = () =>{
    return(
        <div>
            <Accordion items={items} />
        </div>

    )
}

export default App;