import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo } from '../contentcomponents/Header';
import Regresar from '../contentcomponents/Regresar';

const ListaGastos = () => {
    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>
            <Header>
                <Regresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>
        </>
    );
}

export default ListaGastos;