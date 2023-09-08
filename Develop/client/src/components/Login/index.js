import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
// import { LOGIN } from '../../utils/mutations';
// import Auth from '../../utils/auth';

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

    return (
        <div className="flex flex-col justify-center overflow-hidden absolute m-32 lg:m-64 top-0 left-0 right-0 bottom-100">
            <div className='w-3/4 lg:w-3/4 lg:h-fit p-6 m-auto bg-zinc-50 rounded-md shadow-md'>
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
                        <button type="submit" className='w-full px-4 py-2 tracking-wide text-zinc-50 transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'>Submit</button>
                    </div>
                    <p className='mt-2'>Don't have an account?<Link to="/signup" className='ml-1 underline hover:text-green-500'>Signup</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Login;