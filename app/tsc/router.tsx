import * as React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Hello} from './components/hello'
import {HelloTo, ToWho} from './components/helloprops';
import {HelloGlobalState, ToWhoWithUpdate} from './components/helloglobalstate'
import {HelloStatefulComponent} from './components/hellocomponentstate'
import {RouteComponentProps} from "react-router";


const HelloParamsTo = (propsWithParams: RouteComponentProps<ToWho>) => <HelloTo to={propsWithParams.match.params.to}/>
const HelloParamsState = (propsWithParams: RouteComponentProps<ToWhoWithUpdate>) => <HelloGlobalState
    to={propsWithParams.match.params.to}
    updateTo={(to:string)=> window.location.pathname = `/statefulhello/${to}`}
/>

export const Router =  () => <div className="reactRouter"><BrowserRouter>
    <Switch>
        <Route path="/hello/:to" children={HelloParamsTo}/>
        <Route path="/hello" children={Hello}/>
        <Route path="/statefulhello/:to" children={HelloParamsState}/>
        <Route path="/componentstatehello" children={<HelloStatefulComponent initialState="World"/>}/>
    </Switch>
</BrowserRouter></div>
