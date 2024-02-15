import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Search from '../../common/Search';
import './AccountView.css';

const AccountView = () => {
    const [accounts, setAccounts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadAccounts();
    }, []);

    const loadAccounts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/accounts");
            setAccounts(response.data);
        } catch (error) {
            console.log("error loading accounts", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/accounts/delete/${id}`);
            setAccounts(accounts.filter(account => account.id !== id));
        } catch (error) {
            console.log("error deleting account", error);
        }
    };

    return (
        <section>
            <Search search={search} setSearch={setSearch} />
            <table className='table table-bordered table-hover shadow'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>Account Holder Name</th>
                        <th>Balance</th>
                        <th colSpan='3'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {accounts
                        .filter(ac => ac.accountHolderName.toLowerCase().includes(search.toLowerCase()))
                        .map((account, index) => (
                            <tr key={account.id}>
                                <td>{account.id}</td>
                                <td>{account.accountHolderName}</td>
                                <td>{account.balance}</td>
                                <td>
                                    <Link to={`/account-profile/${account.id}`} className="btn btn-info me-2">
                                        <FaEye />
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(account.id)}>
                                        <FaTrashAlt />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
}

export default AccountView;
