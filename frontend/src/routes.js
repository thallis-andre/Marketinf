import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/index';
import Busca from './Pages/Busca/index';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/empresa" component={ Busca } />
            </Switch>
        </BrowserRouter>
    );
}
