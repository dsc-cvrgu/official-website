import { auth } from 'firebase/app';
import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import { useHistory } from "react-router-dom";
import $ from 'jquery'
import { ToastProvider, useToasts } from 'react-toast-notifications'

const Login = () => {
    return (
        <div>
            <NavBar />
            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="text-center">Account Login</h2>
                        </div>
                    </div>
                </div>
            </header>
            <ToastProvider>
                <LoginForm />
            </ToastProvider>
            <footer id="footer">
                <p>Copyright DSC CVRGU &copy; 2020</p>
            </footer>
        </div>
    )
}

export default Login

export const LoginForm = () => {
    const { addToast } = useToasts();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [passWd, setPassWd] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        $('#submit').html('Logging in...').addClass('disabled');
        auth().signInWithEmailAndPassword(email, passWd).then(() => history.push('/'))
            .catch(err => {
                $('#submit').html('Login').removeClass('disabled');
                addToast(err.message, { appearance: 'error', autoDismiss: true });
            });
    }
    return (
        <section id="main">
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 col-md-offset-4">
                        <form id="login" action="/" className="well">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassWd(e.target.value)} />
                            </div>
                            <button type="submit" id="submit" className="btn btn-danger btn-block" onClick={handleSubmit}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}