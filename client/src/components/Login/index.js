import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
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
                    <div className='mx-auto px-2.5 pt-2 pb-10 md:px-8 md:mx-12 md:my-24 xl:py-16 xl:px-[40rem] xl:mx-auto'>
                        <form onSubmit={handleFormSubmit} className='font-body mx-auto'>
                            <div className="">
                                <label htmlFor="email" className='block text-sm font-semibold text-zinc-50'>Email address:</label>
                                <input
                                    className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40'
                                    placeholder="youremail@test.com"
                                    name="email"
                                    type="email"
                                    id="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="pwd" className='block text-sm font-semibold text-zinc-50'>Password:</label>
                                <input
                                    className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40'
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