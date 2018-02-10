import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Hello from './components/hello'
import HelloTo, {ToWho} from './components/helloprops';
import {RouteComponentProps} from "react-router";

const HelloParamsTo  = (propsWithParams:RouteComponentProps<ToWho>) => <HelloTo to={propsWithParams.match.params.to}/>

export default () => <div className="reactRouter"><BrowserRouter>
    <Switch>
        <Route path="/hello/:to" children={HelloParamsTo}/>
        <Route path="/hello" children={Hello}/>
    </Switch>
</BrowserRouter></div>
