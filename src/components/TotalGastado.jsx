import React from 'react';
import styled from 'styled-components';
import { useTotalDelMes } from '../contextos/TotalGastadoMes';
import theme from '../theme';
import cambiarMoneda from './funciones/cambiarMoneda';

const BarraTotal = styled.div`
    background: ${theme.black};
    font-size: 1.25rem; 
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; 
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    @media(max-width: 31.25rem) { 
        flex-direction: column;
        font-size: 14px;
    }
`;

const TotalGastado = () => {
    const { total } = useTotalDelMes()
    return (
        <BarraTotal >
            <p>Total gastado del  mes:</p>
            <p>{cambiarMoneda(total)}</p>
        </BarraTotal >
    );
}

export default TotalGastado;