
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Router} from './router';
console.log("Rendering")

ReactDOM.render( Router(), document.getElementById("app"));
console.log("Rendered")

