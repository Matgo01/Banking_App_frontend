import axios from 'axios';
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate=useNavigate();

    const [admin, setAdmin]=useState({
        email:'',
        password:''

    });

    const {email, password}=admin

    const handleInputChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value});
    }

    const LogAdmin=async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:8080/auth/authentication",admin);
            navigate("/startHome")
        }catch(error){
             console.error("errore duratne il login",error)
        }
    }

    return (<div>
        <h2 className='mt-5'>Login</h2>
        <form onSubmit={(e)=>LogAdmin(e)}>
            <div className='input-group mb-5'>
                <label className='input-group-text' htmlFor='email'>Email</label>
                <input 
                className='form-control col-sm-6'
                type='text'
                name='email'
                id='email'
                required
                value={email}
                onChange={(e)=>handleInputChange(e)}/>
            </div>
            <div className='input-group mb-5' ></div>
            <label className='input-group-text' htmlFor='password'>Password</label>
            <input 
            className='form-control col-sm-6'
            type='password'
            name='password'
            id='password'
            required
            value={password}
            onChange={(e)=>handleInputChange(e)}/>
            <div>
                <button type='submit' className='btn btn-outline-success btn-lg'> Login</button>
            </div>
            <div>
                <Link to={'/'} className='btn btn-outline-warning btn-lg'>Cancel</Link>
             </div>

        </form>
    </div>);
}


export default Login;