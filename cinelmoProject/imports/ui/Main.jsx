import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListarSocio from './ListarSocio.js';
import InsertarSocio from './InsertarSocio.js';
import EditarSocio from './EditarSocio.js';

const Main = () => (
  <Switch>
    <Route exact path='/' component={ListarSocio}/>
    <Route path='/insert' component={InsertarSocio}/>
    <Route path='/edit/:idsocio' component={EditarSocio}/>
  </Switch>
);

export default Main;
