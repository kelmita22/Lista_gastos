import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Titulo } from '../contentcomponents/Header';
import Regresar from '../contentcomponents/Regresar';
import obtenerGastos from '../hooks/obtenerGastos';
import TotalGastado from './TotalGastado';
import {
    Lista,
    ElementoLista,
    Categoria,
    Descripcion,
    Valor,
    Fecha,
    ContenedorBotones,
    BotonAccion,
    BotonCargarMas,
    ContenedorBotonCentral,
    ContenedorSubtitulo,
    Subtitulo
} from './../contentcomponents/ElementosLista';
import cambiarMoneda from './funciones/cambiarMoneda';
import { Link } from 'react-router-dom';
import Boton from '../contentcomponents/Boton';
import { format, fromUnixTime } from 'date-fns';
import { es } from 'date-fns/locale';
import borrarGasto from '../firebase/borrarGasto';

const ListaGastos = () => {
    const [gastos, obtenerMasGastos, haymMasPorCargar] = obtenerGastos()

    const formatearFecha = (fecha) => {
        return format(fromUnixTime(fecha), "dd 'de' MMMM 'de' yyyy", { locale: es });
    }

    const fechaRepetida = (gastos, index, gasto) => {
        if (index !== 0) {
            const fechaActual = formatearFecha(gasto.fecha)
            const fechaGastoAnterior = formatearFecha(gastos[index - 1].fecha)

            if (fechaActual === fechaGastoAnterior) {
                return true
            } else {
                return false
            }
        }
    }

    return (
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>
            <Header>
                <Regresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>
            <Lista>
                {gastos.map((gasto, index) => {
                    return (
                        <section key={gasto.id}>
                            {!fechaRepetida(gastos, index, gasto) && <Fecha>
                                {formatearFecha(gasto.fecha)}
                            </Fecha>}

                            <ElementoLista key={gasto.id}>
                                <Categoria>
                                    {gasto.categoria}
                                </Categoria>
                                <Descripcion>
                                    {gasto.descripcion}
                                </Descripcion>
                                <Valor>
                                    {cambiarMoneda(gasto.cantidad)}
                                </Valor>
                                <ContenedorBotones>
                                    <BotonAccion as={Link} to={`/editar-gastos/${gasto.id}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z" /></svg></BotonAccion>
                                    <BotonAccion
                                        onClick={() => borrarGasto(gasto.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" /></svg></BotonAccion>
                                </ContenedorBotones>
                            </ElementoLista>
                        </section>
                    );
                })}
                {haymMasPorCargar &&
                    <ContenedorBotonCentral>
                        <BotonCargarMas onclick={() => obtenerMasGastos()}>Cargar Más</BotonCargarMas>
                    </ContenedorBotonCentral>
                }
                {gastos.length === 0 &&
                    <ContenedorSubtitulo>
                        <Subtitulo>Aún no haz ingresado gastos</Subtitulo>
                        <Boton as={Link} to={'/'} >Agregar gastos</Boton>
                    </ContenedorSubtitulo>
                }

            </Lista>

            <TotalGastado />
        </>
    );
}

export default ListaGastos;