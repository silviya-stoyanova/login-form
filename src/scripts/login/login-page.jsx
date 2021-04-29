import '../../styles/login/login-page.scss';

import React from 'react';
import Link from '../common-components/link';
import { routes } from '../constants/routes';
import { strings } from '../constants/constants';
import LoginForm from './login-form';

const { FORGOTTEN_PASSWORD } = routes;
const { loginToYourAccount, forgotYourPassword } = strings;

const LoginPage = () => (
    <main className="login">
        <section className="login-page-content-wrapper">
            <h1 className="login-title">
                {loginToYourAccount}
            </h1>
            <LoginForm />
            <Link
                className="link login-forgotten-password"
                href={FORGOTTEN_PASSWORD}
                text={forgotYourPassword}
            />
        </section>
    </main>
);

export default LoginPage;