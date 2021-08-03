import React, { useState, useEffect } from 'react';
import Boton from '../contentcomponents/Boton';
import { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton } from './../contentcomponents/SeccionesFormulario';
import DatePicker from './DatePicker';
import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime'
import SelectCategorias from './SelectCategorias';
import agregarGasto from './../firebase/agregarGasto';
import { useAuth } from './../contextos/AuthContext';
import Alerta from './../contentcomponents/Alerta';
import { useHistory } from 'react-router-dom';
import editarGasto from '../firebase/editarGasto';

const FormularioGasto = ({ gasto }) => {
    const [inputDescripcion, cambiarInputDescripcion] = useState('')
    const [inputCantidad, cambiarInputCantidad] = useState('')
    const [categoria, cambiarCategoria] = useState('alimento')
    const [fecha, cambiarFecha] = useState(new Date())
    const { usuario } = useAuth()
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false)
    const [alerta, cambiarAlerta] = useState({})
    const history = useHistory()

    useEffect(() => {
        if (gasto) {
            if (gasto.data().uidUsuario === usuario.uid) {
                cambiarCategoria(gasto.data().categoria)
                cambiarFecha(fromUnixTime(gasto.data().fecha))
                cambiarInputDescripcion(gasto.data().descripcion)
                cambiarInputCantidad(gasto.data().cantidad)
            } else {
                history.push('/lista-gastos')
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gasto, usuario, history]);

    const handleChange = (e) => {
        if (e.target.name === 'descripcion') {
            cambiarInputDescripcion(e.target.value)
        } else if (e.target.name === 'cantidad') {
            cambiarInputCantidad(e.target.value.replace(/[^0-9.]/g, ''))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let cantidad = parseFloat(inputCantidad).toFixed(2)

        if (inputDescripcion !== '' && inputCantidad !== '') {
            if (cantidad) {
                if (gasto) {
                    editarGasto({
                        categoria: categoria,
                        descripcion: inputDescripcion,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha),
                    }).then(() => {
                        history.push('/lista-gastos')
                    }).catch((error) => {
                        console.log(error)
                    })
                } else {
                    agregarGasto({
                        categoria: categoria,
                        descripcion: inputDescripcion,
                        cantidad: cantidad,
                        fecha: getUnixTime(fecha),
                        uidUsuario: usuario.uid
                    })
                        .then(() => {
                            cambiarCategoria('alimento')
                            cambiarInputDescripcion('')
                            cambiarInputCantidad('')
                            cambiarFecha(new Date())

                            cambiarEstadoAlerta(true)
                            cambiarAlerta({ tipo: 'exito', mensaje: 'Tus gastos se ingresaron correctamente' })
                        })
                        .catch((error) => {
                            cambiarEstadoAlerta(true)
                            cambiarAlerta({ tipo: 'error', mensaje: 'Hubo un problema al intentar ingresar tus gastos' })
                        })
                }
            }
        } else {
            cambiarEstadoAlerta(true)
            cambiarAlerta({ tipo: 'error', mensaje: 'Completa todos los campos' })
        }
    }

    return (
        <Formulario onSubmit={handleSubmit}>
            <ContenedorFiltros>
                <SelectCategorias
                    categoria={categoria}
                    cambiarCategoria={cambiarCategoria}
                />
                <DatePicker
                    fecha={fecha}
                    cambiarFecha={cambiarFecha}
                />
            </ContenedorFiltros>
            <section>
                <Input
                    type='text'
                    name='descripcion'
                    placeholder='Descripción'
                    value={inputDescripcion}
                    onChange={handleChange}
                />
                <InputGrande
                    type='text'
                    name='cantidad'
                    placeholder='S/.0.00'
                    value={inputCantidad}
                    onChange={handleChange}
                />
            </section>
            <ContenedorBoton>
                <Boton as='button' primario type='submit'>
                    {gasto ? 'Editar Gasto' : 'Agregar Gasto'} </Boton>
            </ContenedorBoton>
            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}
            />
        </Formulario>
    );
}

export default FormularioGasto;