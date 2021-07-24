/* eslint-disable no-unused-expressions */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contenedor from './contentcomponents/Contenedor.jsx';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import EditarGastos from './components/EditarGastos.jsx';
import GastosCategoria from './components/GastosCategoria.jsx';
import InicioSesion from './components/InicioSesion.jsx';
import ListaGastos from './components/ListaGastos.jsx';
import Registro from './components/Registro.jsx';

const Index = () => {
  return (
    <BrowserRouter>
      <Contenedor>
        <Switch>
          <Route path='inicio-sesion' component={InicioSesion} />
          <Route path='editar-gastos/:id' component={EditarGastos} />
          <Route path='gastos-categoria' component={GastosCategoria} />
          <Route path='lista-gastos' component={ListaGastos} />
          <Route path='registro' component={Registro} />
          <Route path='/' component={App} />
        </Switch>
        <App />
      </Contenedor>
    </BrowserRouter>
  )
    ;
}

ReactDOM.render(<Index />, document.getElementById('root'));
