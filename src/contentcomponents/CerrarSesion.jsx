import React from 'react';
import { useHistory } from 'react-router-dom';
import Boton from './Boton';
import { auth } from './../firebase/firebaseconfig';

const CerrarSesion = () => {
    const history = useHistory();

    const cerrarSesion = async () => {
        try {
            await auth.signOut();
            history.push('/inicio-sesion')
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <Boton as='button' onClick={cerrarSesion}>Cerrar Sesión</Boton>
    );
}

export default CerrarSesion;