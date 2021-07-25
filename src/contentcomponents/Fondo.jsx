import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const Svg = styled(Particles)`
    height: 100vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
`;

const Fondo = () => {
    return (
        <Svg>
            <Particles />
        </Svg>
    );
}

export default Fondo;