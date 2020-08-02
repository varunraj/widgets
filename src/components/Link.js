import React from 'react';


const Link = ({className, href, children})=>{


    const onClick = (event) => {

        // Below code is to open a new tab when user clicks with ctrl or mata(mac) pressed
        if(event.metaKey || event.ctrlKey) {
            return
        }

        event.preventDefault();
        // below logic will update the url of the browser window 
        // without refreshing the page
        window.history.pushState({},"", href);
        // Create a navigation event that will be used by routes to
        // deletect change in url
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }


    return <a className={className} href={href} onClick={onClick}>
        {children}
    </a>
}

export default Link;
