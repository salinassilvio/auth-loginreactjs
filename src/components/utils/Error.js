import React from 'react'
import styled from '@emotion/styled';

const MensajeError = styled.p`
    padding: 6px;
    margin: 6px;
    background-color:#b7322c;
    color: #FFF;
    font-size:23px;
    font-weight:bold;
    text-align:center;
`;

const Error = ({mensaje}) => {
    return ( 
        <MensajeError>{mensaje}</MensajeError>
     );
}
 
export default Error;