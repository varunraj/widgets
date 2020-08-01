import React, { useState, useEffect, useRef } from 'react'


const Dropdown = ( {options, selected, onSelectedChange, label } ) => {
    
    const [open,setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=>{

        const onBodyClick = (event)=>{
           
            // get a reference to dropdown created by react and check
            // if it contains the target clicked by onclick.
            // If yes, do not set open to false.
           
            if (ref.current.contains(event.target)){
                return
            } else
                setOpen(false)
            } 


        document.body.addEventListener('click', onBodyClick);
        
        // remove the body event listener if no dropdown is shown in screen.
        
        return() => {
            document.body.removeEventListener('click', onBodyClick)
        }

    },[])

    const renderedOptions = options.map((option)=>{
        
        if (option.value === selected.value) {
            return null
        }
        
        return(
            <div key={option.value} 
                 className="item"
                 onClick={()=>onSelectedChange(option)}
                 >
                {option.label}
            </div>
        )
    })
    
    
    return(
        <div ref = {ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={()=>setOpen(!open)} 
                     className={`ui selection dropdown ${open ? 'visible active':''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dropdown;