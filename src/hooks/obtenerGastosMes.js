/* eslint-disable react-hooks/rules-of-hooks */
import { endOfMonth, getUnixTime, startOfMonth } from 'date-fns';
import { useEffect, useState } from 'react';
import { db } from './../firebase/firebaseconfig';
import { useAuth } from './../contextos/AuthContext';

const obtenerGastosMes = () => {
    const [gastos, establecerGastos] = useState([])
    const { usuario } = useAuth()

    useEffect(() => {
        const inicioMes = getUnixTime(startOfMonth(new Date()))
        const finMes = getUnixTime(endOfMonth(new Date()))

        if (usuario) {
            const unsuscribe = db.collection('gastos')
                .orderBy('fecha', 'desc')
                .where('fecha', '>=', inicioMes)
                .where('fecha', '<=', finMes)
                .where('uidUsuario', '==', usuario.uid)
                .onSnapshot((snapshot) => {
                    establecerGastos(snapshot.docs.map((documento) => {
                        return { ...documento.data(), id: documento.id }
                    }))
                })
            return unsuscribe
        }

    }, [usuario])

    return gastos;
}

export default obtenerGastosMes;