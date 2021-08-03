import React from 'react';
import { useAuth } from './../contextos/AuthContext';
import { Route, Redirect } from 'react-router-dom';

const RutaProtegida = ({ children, ...allpropiedades }) => {
    const { usuario } = useAuth();
    if (usuario) {
        return <Route {...allpropiedades}>{children}</Route>
    } else {
        return <Redirect to='/inicio-sesion' />
    }
}

export default RutaProtegida;