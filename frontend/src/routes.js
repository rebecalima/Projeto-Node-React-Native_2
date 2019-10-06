import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/new' component={New} />
            </Switch>
        </BrowserRouter>
    );
}

// o comportamento padrão do Router do React permite
// mais de uma rota ser chamada ao mesmo tempo. O switch
// garante que uma rota seja acessada por vez.

// o exact funciona para chamar exatamente o caminho da propriedade path
// por padrão o path verifica apenas se a rota contém o valor de dentro 
// da propriedade.
