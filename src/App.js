import React from 'react';
import Helmet from 'react-helmet';
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './contentcomponents/Header';
import Boton from './contentcomponents/Boton'
import CerrarSesion from './contentcomponents/CerrarSesion';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>

          <ContenedorBotones>
            <Boton to='/gastos-categoria'>Categoría</Boton>
            <Boton to='/lista-gastos'>Gastos</Boton>
            <CerrarSesion />
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}

export default App;