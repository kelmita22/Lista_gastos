import React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';
import theme from '../theme';
import { es } from 'date-fns/locale';

const parseDate = (str, format, locale) => {
    const parsed = dateFnsParse(str, format, new Date(), { locale: es });
    if (DateUtils.isDate(parsed)) {
        return parsed;
    }
    return undefined;
}

const formatDate = (date, format, locale) => {
    return dateFnsFormat(date, format, { locale: es });
}

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',];
const dias_semana_cortos = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];

const ContenedorInput = styled.div`
    input {
        font-family: 'Work Sans', sans-serif;       
        box-sizing: border-box;
        background: ${theme.grisClaro};
        border: none;
        cursor: pointer;
        border-radius: 0.625rem; 
        height: 5rem;
        width: 100%;
        padding: 0 1.25rem; 
        font-size: 1.5rem; 
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
 
    @media(max-width: 60rem){ 
        & > * {
            width: 100%;
        }
    }
`;

const DatePicker = ({ fecha, cambiarFecha }) => {
    return (
        <ContenedorInput>
            <DayPickerInput
                value={fecha}
                onDayChange={(day) => cambiarFecha(day)}
                format="dd MMMM 'de' yyyy"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={
                    {
                        months: meses,
                        weekdaysShort: dias_semana_cortos
                    }
                }
            />
        </ContenedorInput>
    );
}

export default DatePicker;