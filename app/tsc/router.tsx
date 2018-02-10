import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Hello from './hello'


export default () => <BrowserRouter>
    <Switch>
        <Route path="/hello" children={Hello}/>
    </Switch>
</BrowserRouter>
