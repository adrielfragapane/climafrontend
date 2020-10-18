import React, { useState } from 'react';

import axios from 'axios';

const Login = () => {

    // Variables globales del componente
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Método para crear cuenta / iniciar sesión
    const autenticate = async (login) => {

        try {
            if (email === '' || password === '') {
                return;
            }
            const res = await axios.post(`https://climabackend.herokuapp.com/user/${login ? 'login' : 'signin'}`, { email: email, password: password });

            if (res.data.status === 200) {
                const { accessToken } = res.data;
                localStorage.setItem('accessToken', accessToken);
                window.location.reload();
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>

            <div style={{ margin: 'auto' }}>
                <h1>INICIAR SESIÓN</h1>
                <form>
                    <div className="form-group">
                        <input className="form-control"
                            type='email'
                            placeholder="Email" required={true}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input className="form-control"
                            type='password'
                            placeholder="Password" required={true}
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                </form>

                <button className="btn btn-dark w-100 mb-3" onClick={() => autenticate(true)}>
                    Iniciar Sesión
                </button>
                <button className="btn btn-dark w-100" onClick={() => autenticate(false)}>
                    Crear Cuenta
                </button>
            </div>

        </div>
    )
}

export default Login;