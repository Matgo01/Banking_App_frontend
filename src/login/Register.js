import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    let navigate = useNavigate();
    
    const [admin, setAdmin] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
       
    });

    const { firstName, lastName, email, username, password } = admin;

    const handleInputChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value});
    }

    const saveAdmin = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/auth/register", admin);
        navigate("/");
    }

    return (
        <div>
            <h2 className='mt-5'>Register Admin</h2>
            <form onSubmit={(e) => saveAdmin(e)}>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='firstName'>
                        First Name
                    </label>
                    <input 
                        className='form-control col-sm-6'
                        type='text'
                        name='firstName'
                        id='firstName'
                        required
                        value={firstName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className='input-group mb-5'>
                    <label className='input-group-text' htmlFor='lastName'>Last Name</label>
                    <input 
                        className='form-control col-sm-6'
                        type='text'
                        name='lastName'
                        id='lastName'
                        required
                        value={lastName}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className='form-control col-sm-5'>
                    <label className='input-group-text' htmlFor='email'>Email</label>
                    <input 
                        className='form-control col-sm-6'
                        type='text'
                        name='email'
                        id='email'
                        required
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className='form-control col-sm-5'>
                    <label className='input-group-text' htmlFor='username'>Username</label>
                    <input 
                        className='form-control col-sm-6'
                        type='text'
                        name='username'
                        id='username'
                        required
                        value={username}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className='form-control col-sm-5'>
                    <label className='input-group-text' htmlFor='password'>Password</label>
                    <input 
                        className='form-control col-sm-6'
                        type='password'
                        name='password'
                        id='password'
                        required
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div>
                    <button type='submit' className='btn btn-outline-success btn-lg'> Save</button>
                </div>
                <div>
                    <Link to={'/'} className='btn btn-outline-warning btn-lg'>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default Registration;