/* eslint-disable no-unused-expressions */
import { db } from "../firebase/firebaseconfig";
import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";


const useObtenerGasto = (id) => {
    const history = useHistory()
    const [gasto, establecerGasto] = useState('')

    useEffect(() => {
        db.collection('gastos').doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    establecerGasto(doc)

                } else {
                    history.push('/lista-gastos')
                }
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [history, id])
    return [gasto]
}
export default useObtenerGasto;