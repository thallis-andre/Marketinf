import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home/home';
import Entrar from './Pages/Entrar/entrar';
import Cadastrar from './Pages/Cadastrar/cadastrar';
import Loja from './Pages/Cadastrar/Loja/loja';
import Inf from './Pages/Cadastrar/Inf/inf';
import Anuncios from './Pages/Empresa/Anúncios/anuncio';
import Influencer from './Pages/Influencer/influencer';
import Empresa from './Pages/Empresa/empresa';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/entrar" component={ Entrar } />
                <Route path="/cadastrar/inf" component={ Inf } />
                <Route path="/cadastrar/loja" component={ Loja } />
                <Route path="/cadastrar" component={ Cadastrar } />
                <Route path="/empresa/anuncios" component={ Anuncios } />
                <Route path="/empresa" component={ Empresa } />
                <Route path="/influencer" component={ Influencer } />
                

            </Switch>
        </BrowserRouter>
    );
}
