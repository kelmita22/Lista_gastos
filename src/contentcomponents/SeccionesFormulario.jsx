import styled from 'styled-components';
import theme from './../theme';

const ContenedorFiltros = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.87rem; 
 
    @media(max-width: 60rem){ 
        flex-direction: column;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; 
        }
    }
`;

const Formulario = styled.form`
    padding: 0 2.5rem; 
     height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
        width: 100%;
        text-align: center;
        padding: 2.5rem 0;
        font-family: 'Work Sans', sans-serif;
        &::placeholder {
            color: rgba(0,0,0,.2);
        }
    }
 
    @media(max-width: 60rem){ 
        justify-content: start;
    }
`;

const Input = styled.input`
height:20px;
margin:0;
padding-right: 30px;
width: 100%;
border: none;
border-bottom: 2px solid ${theme.grisClaro};
outline: none;
 
    @media(max-width: 60rem){ 
        font-size: 2.2rem; 
    }
`;

const InputGrande = styled(Input)`
    font-size: 4.37rem;
    font-weight: bold;
`;

const ContenedorBoton = styled.div`
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;  
`;

const Icon = styled.svg`
position: absolute;
top: 20px;
left: 15px;
`
const InputContainer = styled.div`
position: relative;
`
export { ContenedorFiltros, Formulario, Input, InputGrande, ContenedorBoton, Icon, InputContainer }