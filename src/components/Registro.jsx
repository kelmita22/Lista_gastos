import React from 'react';
import { Helmet } from 'react-helmet';
import { ContenedorHeader, Header, Titulo } from '../contentcomponents/Header';
import Boton from './../contentcomponents/Boton';

const Registro = () => {
    return (
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>
            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>

                    <section>
                        <Boton to='/inicio-sesion'>Iniciar Sesión</Boton>
                    </section>
                </ContenedorHeader>
            </Header>
        </>
    );
}

export default Registro;