import '../../styles/login/login-form.scss';

import React from 'react';
import { strings } from '../constants/constants';

const { email, password, login } = strings;

const LoginForm = () => (
    <form action="#" className="login-form" method="">
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
            <span className="login-form-button-text">
                {login}
            </span>
        </button>
    </form>
);

export default LoginForm;