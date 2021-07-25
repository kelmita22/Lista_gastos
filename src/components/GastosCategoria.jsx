import React from 'react';
import Helmet from 'react-helmet';
import { Header, Titulo } from '../contentcomponents/Header';
import Regresar from './../contentcomponents/Regresar'

const GastosCategoria = () => {
    return (
        <>
            <Helmet>
                <title>Gastos por Categoría</title>
            </Helmet>
            <Header>
                <Regresar />
                <Titulo>Gastos por Categoría</Titulo>
            </Header>
        </>
    );
}

export default GastosCategoria;