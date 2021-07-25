import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Boton = styled(Link)`
    background: ${(props) => props.primario ? '#5B69E2' : '#232741'};
    width: ${(props) => props.conIcono ? '15.62rem' : 'auto'};
    margin-left: 1.25rem; 
    border: none;
    border-radius: 0.625rem;
    color: #fff;
    height: 2rem;
    padding: 1.25rem 1.87rem; 
    font-size: 1rem; 
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
    outline: none;
    text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre;
 
    svg {
        height: ${(props) => props.iconoGrande ? '100%' : '1.75rem;'};
        fill: white;
    }
`;

export default Boton