import React, { useState } from 'react';

import firebase from '../../config/firebase';
import 'firebase/auth';

import 'register.css';

function Register() {
    
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [error, setError] = useState();
    const [msgError, setMsgError] = useState();

    function cadastrar() {

        setError(null);

        if(!email || !senha) {
            setError('error');
            setMsgError('Error, verifique a senha e o email imputado ao sistema');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then( resultado =>
            setError('Sucesso')
        ).catch(error => {
            alert(error)
        });


    }

    return(
        <div className="form-cadastro">

            <form className="text-center form-login mx-auto mt-5">

                <h1 className="h3 mb-3 text-black font-weight-bold">Cadastro</h1>
                
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" placeholder="Password" />

                <button className="btn btn-lg btn-block mt-3 btn-cadastro">Cadastrar</button>

                { error === 'error' && <span className="bg-danger color-white" >{msgError}</span> }

            </form>
        </div>
    )

}

export default Register;
