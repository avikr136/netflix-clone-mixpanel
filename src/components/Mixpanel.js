import mixpanel from 'mixpanel-browser';
// or with require() syntax:
// const mixpanel = require('mixpanel-browser');

// Enabling the debug mode flag is useful during implementation,
// but it's recommended you remove it for production
mixpanel.init('ce9caa52308bd2d85e598dc4e4f2208d', {debug: true}); 
mixpanel.identify("Avinash")
mixpanel.people.set({ "$name": "Avinash", "$email": "avinash@samudai.xyz" })
mixpanel.people.increment("page_views")
mixpanel.track('Sign up');


const call1 = (param1, param2) =>{
    mixpanel.track(param1 + '/' + param2);
    console.log(param1 + '/' + param2);
}

const call2= (param, objectData) =>{
    mixpanel.track(param, objectData );
    console.log(param);
}

const onMouseHoverTime = () => {
    mixpanel.time_event("MouseHover")
}

const onMouseHoverLeave = () => {
    mixpanel.track("MouseHover", {
        "tracked": true
    })
}

export {call1, call2, onMouseHoverLeave, onMouseHoverTime}




// import call from '../Mixpanel';
// onClick={() => call()}