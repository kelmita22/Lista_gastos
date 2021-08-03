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
import Fondo from './contentcomponents/Fondo';
import { AuthProvider } from './contextos/AuthContext';
import RutaProtegida from './components/RutaPrivada';


const Index = () => {
  return (

    <>
      <AuthProvider>
        <BrowserRouter>
          <Contenedor>
            <Switch>
              <Route path='/inicio-sesion' component={InicioSesion} />
              <Route path='/registro' component={Registro} />
              <RutaProtegida path='/gastos-categoria'>
                <GastosCategoria />
              </RutaProtegida>
              <RutaProtegida path='/lista-gastos'>
                <ListaGastos />
              </RutaProtegida>
              <RutaProtegida path='/editar-gastos/:id'>
                <EditarGastos />
              </RutaProtegida>
              <RutaProtegida path='/'>
                <App />
              </RutaProtegida>
            </Switch>
          </Contenedor>
        </BrowserRouter >
      </AuthProvider>
      <Fondo />
    </>
  )
    ;
}

ReactDOM.render(<Index />, document.getElementById('root'));
