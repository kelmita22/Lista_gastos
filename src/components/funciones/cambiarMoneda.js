const cambiarMoneda = (cantidad) => {
    return new Intl.NumberFormat(
        'es-PE',
        { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 }

    ).format(cantidad);
}

export default cambiarMoneda;