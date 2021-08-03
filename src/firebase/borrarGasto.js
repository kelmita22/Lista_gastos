import { db } from './firebaseconfig';

const borrarGasto = (id) => {
    db.collection('gastos').doc(id).delete();
}

export default borrarGasto;