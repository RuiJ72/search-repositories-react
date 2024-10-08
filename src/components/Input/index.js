import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer } from './styles';

function Input({ value, onChange }) {
    return (
        <InputContainer>
            <input value={value} onChange={onChange} placeholder="Enter repository name..." />
        </InputContainer>
    );
}

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Input;
