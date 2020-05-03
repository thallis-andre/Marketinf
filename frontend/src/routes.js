import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Busca from './Pages/Busca/index';
import Entrar from './Pages/Entrar/entrar';
import Cadastrar from './Pages/Cadastrar/cadastrar';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/empresa" component={ Busca } />
                <Route path="/entrar" component={ Entrar } />
                <Route path="/cadastrar" component={ Cadastrar } />
            </Switch>
        </BrowserRouter>
    );
}
