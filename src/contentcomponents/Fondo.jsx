import React from 'react';
import styled from 'styled-components';
import Particles from 'react-particles-js';

const Fondo = () => {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />

    );
}

export default Fondo;