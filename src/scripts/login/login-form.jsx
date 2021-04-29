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

    const handleFieldOnBlur = ({ target }) => {

    };

    const handleSubmitBtnClick = ({ target }) => {
        alert(`Wellcome, ${email}`);
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
                onBlur={handleFieldOnBlur}
            />
            <input
                className="login-form-field"
                placeholder={passwordString}
                onBlur={handleFieldOnBlur}
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