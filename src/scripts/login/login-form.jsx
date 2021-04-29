import '../../styles/login/login-form.scss';

import React from 'react';
import { strings } from '../constants/constants';

const { email, password, login } = strings;

const LoginForm = () => (
    <form className="login-form">
        <input
            className="login-form-field"
            placeholder={email}
        />
        <input
            className="login-form-field"
            placeholder={password}
        />
        <button
            className="login-form-button"
            type="submit"
        >
            {login}
        </button>
    </form>
);

export default LoginForm;