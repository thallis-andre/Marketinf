import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Busca from './Pages/Busca/index';
import Entrar from './Pages/Entrar/entrar';
import Cadastrar from './Pages/Cadastrar/cadastrar';
import Anuncios from './Pages/Anúncios/anuncio';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/influencer" component={ Busca } />
                <Route path="/entrar" component={ Entrar } />
                <Route path="/cadastrar" component={ Cadastrar } />
                <Route path="/empresa" component={ Anuncios } />
            </Switch>
        </BrowserRouter>
    );
}
