import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);

        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    function showLogin() {

        if (Auth.loggedIn()) {
            return <Navigate to="/mygarden" />
        } else {
            return (
                <div className="">
                    <div className='bg-zinc-100 px-24 py-8 xl:py-16 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm bg-opacity-80 border-2 border-green-500 shadow-xl shadow-black'>
                        <h2 className='text-3xl font-semibold text-center text-zinc-800'>Login</h2>
                        <form onSubmit={handleFormSubmit} className='mt-6'>
                            <div className="mb-2">
                                <label htmlFor="email" className='block text-sm font-semibold text-zinc-800'>Email address:</label>
                                <input
                                    className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                    placeholder="youremail@test.com"
                                    name="email"
                                    type="email"
                                    id="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="pwd" className='block text-sm font-semibold text-zinc-800'>Password:</label>
                                <input
                                    className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    id="pwd"
                                    onChange={handleChange}
                                />
                            </div>
                            {error ? (
                                <div>
                                    <p className="error-text">The provided credentials are incorrect</p>
                                </div>
                            ) : null}
                            <div className="mt-6">
                                <button type="submit" className='w-full px-4 py-2 tracking-wide text-zinc-50 transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 shadow-sm shadow-black'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }

    return (
        <div>
            {showLogin()}
        </div>
    )

}

export default Login;