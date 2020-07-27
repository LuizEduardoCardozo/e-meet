import React, { useState } from 'react';

import firebase from '../../config/firebase';
import 'firebase/auth'

import './login.css';

function Login() {
    
    const [ email, setEmail ] = useState();
    const [ senha, setSenha ] = useState();
    const [ msgTipo, setMsgTipo ] = useState();

    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('Sucesso');
        }).catch(error => {
            setMsgTipo('Error');
        });

    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">

                <h1 className="h3 mb-3 text-center text-white font-weight-bold">Login</h1>

                <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" className="form-control my-2" placeholder="Email" required autofocus />  
                <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" className="form-control my-2" placeholder="Password" required />

                <button onClick={logar} className="btn btn-lg btn-login btn-block" type="submit">Sign in</button>
                
                {msgTipo === 'Sucesso' && <span className="text-center text-white"><strong>WoW! Você está conectado</strong></span>}
                {msgTipo === 'Error' && <span className="text-center text-white bg-danger"><strong>Erro! Verifique se o email e senha estão corretos</strong></span>}

                <div className="opcoes-login mt-5">
                    <a href="/#" className="mx-2">Recuperar senha</a>
                    <span className="text-white text-center" aria-label="coffee" role="img">&#9749;</span>
                    <a href="/#" className="mx-2">Quero me cadastrar</a>
                </div>

            </form>
        </div>
    );
}

export default Login;
