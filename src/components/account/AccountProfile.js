import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './AccountProfile.css';

const AccountProfile = () => {
    const { id } = useParams();
    const [account, setAccount] = useState({
        accountHolderName: '',
        balance: ''
    });
    const [transactionAmount, setTransactionAmount] = useState('');

    useEffect(() => {
        loadAccount();
    }, []);

    const loadAccount = async () => {
        try {
            const result = await axios.get(
                `http://localhost:8080/api/accounts/${id}`
            );
            setAccount(result.data)
        } catch (error) {
            console.log("error loading account", error);
        }
    }

    const handleDeposit = async () => {
        try {
            
            const result = await axios.get(`http://localhost:8080/api/accounts/${id}`);
            
            
            const currentBalance = result.data.balance;
    
            
            const updatedBalance = parseFloat(currentBalance) + parseFloat(transactionAmount);
    
            
            await axios.put(`http://localhost:8080/api/accounts/deposit/${id}`, { balance: updatedBalance });

            loadAccount();
            
            console.log('Deposito avvenuto con successo');
        } catch (error) {
            console.log("error handling deposit", error);
        }
    }
    

    const handleWithdraw = async () => {
        try {
            
            const result = await axios.get(`http://localhost:8080/api/accounts/${id}`);
            
            
            const currentBalance = result.data.balance;
    
            
            if (parseFloat(transactionAmount) > parseFloat(currentBalance)) {
                console.log('Importo da prelevare superiore al saldo attuale');
                return;
            }
    
            
            const updatedBalance = parseFloat(currentBalance) - parseFloat(transactionAmount);
    
           
            await axios.put(`http://localhost:8080/api/accounts/withdraw/${id}`, { balance: updatedBalance });
    
            
            loadAccount();
            
            console.log('Prelievo avvenuto con successo');
        } catch (error) {
            console.log("error handling withdrawal", error);
        }
    }
    
    return (
        <section className='shadow' style={{ backgroundColor: 'whitesmoke' }}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='card mb-4'>
                            <div className='card-body text-center'>
                                <img
                                    src="https://mdbcd.b-cdn.net/img/Photos/new-templates/bootstrap-chat/avatar"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 150 }} />
                                <h5 className='my-3'>{`${account.accountHolderName}`}</h5>
                                <div className='input-group mb-2'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='Amount'
                                        value={transactionAmount}
                                        onChange={(e) => setTransactionAmount(e.target.value)} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button type='button' className='btn btn-outline-primary' onClick={handleDeposit}>Deposit</button>
                                    <button type='button' className='btn btn-outline-warning ms-1' onClick={handleWithdraw}>Withdraw</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AccountProfile;
