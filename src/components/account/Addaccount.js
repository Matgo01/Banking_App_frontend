

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddAccount.css'; 

const AddAccount = () => {
    let navigate = useNavigate();

    const [account, setAccounts] = useState({
        accountHolderName: '',
        balance: '' 
    })

    const { accountHolderName, balance } = account; 

    const handleInputChange = (e) => {
        setAccounts({ ...account, [e.target.name]: e.target.value })
    }

    const saveAccount = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/accounts", account);
        navigate("/view-accounts");
    }

    return (
        <div className='container py-5'>
            <h2 className='mt-5'>Add Account</h2>
            <form onSubmit={(e) => saveAccount(e)}>
                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor='accountHolderName'>Account Holder Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='accountHolderName'
                        id='accountHolderName'
                        required
                        value={accountHolderName}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div className='input-group mb-3'>
                    <label className='input-group-text' htmlFor='balance'>Balance</label>
                    <input
                        className='form-control'
                        type='number'
                        name='balance'
                        id='balance'
                        required
                        value={balance}
                        onChange={(e) => handleInputChange(e)} />
                </div>
                <div>
                    <button type='submit' className='btn btn-outline-success btn-lg'>Save</button>
                    <Link to={"/view-accounts"} className='btn btn-outline-warning btn-lg ms-2'>Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export default AddAccount;
