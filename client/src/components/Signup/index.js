import React, { useState } from 'react';
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
        <div className="">
            <div className="bg-zinc-100 px-24 py-8 xl:py-16 rounded-tr-3xl rounded-bl-3xl rounded-tl-sm rounded-br-sm bg-opacity-80 border-2 border-green-500 shadow-xl shadow-black">
            <form onSubmit={handleFormSubmit} className='font-body mx-auto '>
                <div className="mb-2">
                    <label htmlFor="firstName" className='block text-sm font-semibold text-zinc-800'>First Name:</label>
                    <input
                        placeholder="First Name"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                        className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40'
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
                        className='block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40'
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
                        className='block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40'
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
                        className='block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-green-400 focus:ring-green-600 focus:outline-none focus:ring focus:ring-opacity-40'
                    />
                </div>
                <div className="mt-6">
                    <button type="submit"
                    className='w-full px-4 py-2 tracking-wide text-zinc-50 transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600 shadow-sm shadow-black'>Submit</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Signup;
