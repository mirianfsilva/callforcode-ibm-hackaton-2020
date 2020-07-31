import React from 'react';
import Menu from '../../components/Navbar'
import FooterPage from '../../components/Footer';
import LoginPage from '../../components/LoginPage';

function Login() {
    return (
        <div style={{ background: "#fcfdf4" }}>
            <Menu />
            <LoginPage>
            </LoginPage>
        </div>
    );
}

export default Login;