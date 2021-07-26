import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ContenedorHeader, Header, Titulo } from '../contentcomponents/Header';
import Boton from './../contentcomponents/Boton';
import { Formulario, Input, ContenedorBoton, Icon, InputContainer } from './../contentcomponents/SeccionesFormulario';

const Registro = () => {
    const [correo, setCorreo] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleChange = (e) => {
        switch (e.value.name) {
            case 'email':
                setCorreo(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'password2':
                setPassword2(e.target.value)
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
        if (!expresionRegular.test(correo)) {
            console.log('Ingresa un correo válido')
            return;
        } if (correo === '' || password === '' || password2 === '') {
            console.log('Por favor completa los datos')
            return;
        } if (password !== password2) {
            console.log('Las contraseñas no son iguales')
            return;
        }
        console.log('Registro exitoso')
    }

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
            <Formulario onSubmit={handleSubmit}>
                <InputContainer>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z" /></Icon>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Ingresa tu email'
                        value={correo}
                        onChange={handleChange}
                    />
                </InputContainer>
                <InputContainer>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z" /></Icon>
                    <Input
                        type='password'
                        name='password'
                        placeholder='Ingresa tu contraseña'
                        value={password}
                        onChange={handleChange}
                    />
                </InputContainer>
                <InputContainer>
                    <Icon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z" /></Icon>
                    <Input
                        type='password'
                        name='password2'
                        placeholder='Reingresa tu contraseña'
                        value={password2}
                        onChange={handleChange}
                    />
                </InputContainer>
                <ContenedorBoton>
                    <Boton primario as='button' type='submit'>Crear</Boton>
                </ContenedorBoton>
            </Formulario>
        </>
    );
}

export default Registro;