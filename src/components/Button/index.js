import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

function Button({ onClick }) {
    return (
        <ButtonContainer onClick={onClick}>
            Buscar
        </ButtonContainer>
    );
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;
