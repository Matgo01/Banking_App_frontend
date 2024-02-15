

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <header className='navbar navbar-expand-lg mb-5 navbar-colored'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>Banking System</Link>

                <button
                    className='navbar-toggler custom-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link active' aria-current='page' to='/view-accounts'>
                                View All Account
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/add-account'>Add New Account</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default NavBar;
