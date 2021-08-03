import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo } from '../contentcomponents/Header';
import Regresar from '../contentcomponents/Regresar';
import TotalGastado from './TotalGastado';
import FormularioGasto from './FormularioGasto';
import { useParams } from 'react-router-dom';
import useObtenerGasto from '../hooks/useObtenerGasto';

const EditarGastos = () => {
    const { id } = useParams()
    const [gasto] = useObtenerGasto(id)
    return (
        <>
            <Helmet>
                <title>Editar Gasto</title>
            </Helmet>
            <Header>
                <Regresar ruta='/lista-gastos' />
                <Titulo>Editar Gasto</Titulo>
            </Header>
            <FormularioGasto gasto={gasto} />
            <TotalGastado />
        </>
    );
}

export default EditarGastos;