import { useEffect, useState } from 'react'


const Route = ( {path, children }) =>{

    const [currenPath, setCurrentPath] = useState(window.location.pathname)
    useEffect(()=>{

        const onLocationChange = () =>{
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', onLocationChange)

        return () =>{
            window.removeEventListener('popstate', onLocationChange)
        }

    },[])

    
    return currenPath === path 
    ? children
    :null;
};



export default Route;