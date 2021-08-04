import React from 'react';
import Helmet from 'react-helmet';
import { Header, Titulo } from '../contentcomponents/Header';
import obtenerGastosMes from '../hooks/obtenerGastosMes';
import Regresar from './../contentcomponents/Regresar'
import TotalGastado from './TotalGastado';
import {
    ListaDeCategorias,
    ElementoListaCategorias,
    Categoria,
    Valor,
} from './../contentcomponents/ElementosLista';
import cambiarMoneda from './funciones/cambiarMoneda';

const GastosCategoria = () => {
    const gastos = obtenerGastosMes()
    return (
        <>
            <Helmet>
                <title>Gastos por Categoría</title>
            </Helmet>
            <Header>
                <Regresar />
                <Titulo>Gastos por Categoría</Titulo>
            </Header>
            <ListaDeCategorias>
                {gastos.map((elemento, index) => {
                    return (
                        <ElementoListaCategorias key={index}>
                            <Categoria>{elemento.categoria}</Categoria>
                            <Valor>{cambiarMoneda(elemento.cantidad)}</Valor>
                        </ElementoListaCategorias>
                    )
                })}
            </ListaDeCategorias>
            <TotalGastado />
        </>
    );
}

export default GastosCategoria;