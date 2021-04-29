import '../../styles/login/login-form.scss';

import React, { useState } from 'react';
import { strings } from '../constants/constants';

const {
    email: emailString,
    password: passwordString,
    login
} = strings;

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFieldChange = ({ target }) => {
        const { name: fieldName } = target;
        const { value } = target;
        const emailValidationRegEx = /^[^@\s]+@[^@\s.]+\.[^@.\s]+$/;

        if (fieldName === emailString) {
            const isValid = value.match(emailValidationRegEx);
            isValid && setEmail(value);

        } else if (fieldName === passwordString) {
            const isValid = value.length >= 3;
            isValid && setPassword(value);
        }
    };

    const handleSubmitBtnClick = (event) => {
        if (!email || !password) {
            event.preventDefault();
            alert(`Invalid data!`);
        }
    };

    return (
        <form
            className="login-form"
            action="#"
            method=""
        >
            <input
                className="login-form-field"
                placeholder={emailString}
                name={emailString}
                onChange={handleFieldChange}
            />
            <input
                className="login-form-field"
                placeholder={passwordString}
                name={passwordString}
                onChange={handleFieldChange}
            />
            <button
                className="login-form-button"
                type="submit"
                onClick={handleSubmitBtnClick}
            >
                <span className="login-form-button-text">
                    {login}
                </span>
            </button>
        </form>
    );
}

export default LoginForm;