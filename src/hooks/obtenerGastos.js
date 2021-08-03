/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react';
import { db } from '../firebase/firebaseconfig';
import { useAuth } from '../contextos/AuthContext';

const obtenerGastos = () => {
    const { usuario } = useAuth()
    const [gastos, cambiarGastos] = useState([]);
    const [ultimoGasto, cambiarUltimoGasto] = useState(null);
    const [hayMasPorCargar, cambiarhayMasPorCargar] = useState(false)

    const obtenerMasGastos = () => {
        db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .startAfter(ultimoGasto)
            .onSnapshot((snapshot) => {
                if (snapshot.docs.length > 0) {
                    cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1])

                    cambiarGastos(gastos.concat(snapshot.docs.map((gasto) => {
                        return { ...gasto.data(), id: gasto.id }
                    })))
                } else {
                    cambiarhayMasPorCargar(false)
                }
            })
    }

    useEffect(() => {
        const unsuscribe = db.collection('gastos')
            .where('uidUsuario', '==', usuario.uid)
            .orderBy('fecha', 'desc')
            .limit(10)
            .onSnapshot((snapshot) => {
                if (snapshot.docs.length > 0) {
                    cambiarUltimoGasto(snapshot.docs[snapshot.docs.length - 1])
                    cambiarhayMasPorCargar(true)
                } else {
                    cambiarhayMasPorCargar(false)
                }
                cambiarGastos(snapshot.docs.map((gasto) => {
                    return { ...gasto.data(), id: gasto.id }
                }))
            })
        return unsuscribe

    }, [usuario])

    return [gastos, obtenerMasGastos, hayMasPorCargar]
}

export default obtenerGastos;