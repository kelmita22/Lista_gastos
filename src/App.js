import React from 'react';
import Helmet from 'react-helmet';
import { Header, Titulo, ContenedorHeader, ContenedorBotones } from './contentcomponents/Header';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
        </ContenedorHeader>
        <ContenedorBotones>
          <button>Categoría</button>
          <button>Lista de Gastos</button>
        </ContenedorBotones>
      </Header>
    </>
  );
}

export default App;