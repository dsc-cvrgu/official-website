import React, { useEffect } from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import $ from 'jquery'
import { ToastProvider, useToasts } from 'react-toast-notifications'
import { auth } from "./Firebase";

const Login = () => {
    useEffect(() => {
        document.title = "Admin | Login";
        // eslint-disable-next-line
    }, []);

    auth.onAuthStateChanged(user => {
        if (user !== null) window.location.pathname = '/dashboard';
    });
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
    const [email, setEmail] = useState('');
    const [passWd, setPassWd] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        $('#submit').html('Logging in...').addClass('disabled');
        auth.signInWithEmailAndPassword(email, passWd).then((res) => window.location.href = '/dashboard')
            .catch(err => {
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