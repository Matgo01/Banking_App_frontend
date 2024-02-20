import React from 'react';
import { Link } from 'react-router-dom';

const StartHome = () => {
    return (
        <div className="home-container"> 
            <h2>Banking management App</h2>
            <h2>Login</h2>
            <div className="button-container"> 
                <Link to={'/login'} className='btn btn-outline-success btn-lg'>Login</Link>
            </div>
            <h2>Registrazione</h2>
            <div className="button-container"> 
                <Link to={'/register'} className='btn btn-outline-success btn-lg'>Register</Link>
            </div>
        </div>
    )
}


export default StartHome;