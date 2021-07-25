import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Btn = styled.button`
    display: block;
    width: 3.12rem; /* 50px */
    height: 3.12rem; /* 50px */
    line-height: 3.12rem; /* 50px */
    text-align: center;
    margin-right: 1.25rem; /* 20px */
    border: none;
    background: #232741;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.31rem; /* 5px */
    cursor: pointer;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;

const Svg = styled.svg`
    width: 50%;
    height: auto;
    fill: #fff;
`;

const Regresar = ({ ruta = '/' }) => {
    const history = useHistory();
    return (
        <Btn onClick={() => history.push(ruta)}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 12l9-8v6h15v4h-15v6z" />
            </Svg>
        </Btn >
    );
}

export default Regresar;

