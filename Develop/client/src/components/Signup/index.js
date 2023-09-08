import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';

function Signup(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
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
            <div className="w-3/4 lg:w-3/4 lg:h-fit p-6 m-auto bg-zinc-50 rounded-md shadow-md">
                <h6><Link to="/" className='underline text-zinc-800 hover:text-green-700'>← Back to Login</Link></h6>
                <h2 className='text-3xl font-semibold text-center text-zinc-800'>Signup</h2>
            <form onSubmit={handleFormSubmit} className='mt-6'>
                <div className="mb-2">
                    <label htmlFor="firstName" className='block text-sm font-semibold text-zinc-800'>First Name:</label>
                    <input
                        placeholder="First Name"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                        className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="lastName" className='block text-sm font-semibold text-zinc-800'>Last Name:</label>
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                        className='block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className='block text-sm font-semibold text-zinc-800'>Email:</label>
                    <input
                        placeholder="youremail@test.com"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                        className='block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd" className='block text-sm font-semibold text-zinc-800'>Password:</label>
                    <input
                        placeholder="******"
                        name="password"
                        type="password"
                        id="pwd"
                        onChange={handleChange}
                        className='block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className="mt-6">
                    <button type="submit"
                    className='w-full px-4 py-2 tracking-wide text-zinc-50 transition-colors duration-200 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600'>Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Signup;
