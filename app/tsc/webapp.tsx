
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import router from './router';
console.log("Rendering")

ReactDOM.render( router(), document.getElementById("app"));
console.log("Rendered")

