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
            <div className="mx-10 -mt-[4.25rem] px-2.5 pt-2 pb-10 md:px-8 md:mx-12 md:my-12 lg:px-8 lg:mx-12 lg:my-12 xl:py-16 xl:px-[40rem] xl:mx-auto flex flex-wrap">
            <form onSubmit={handleFormSubmit} className='font-body mx-auto '>
                <div className="mb-2">
                    <label htmlFor="firstName" className='block text-sm font-semibold text-zinc-50'>First Name:</label>
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
                    <label htmlFor="lastName" className='block text-sm font-semibold text-zinc-50'>Last Name:</label>
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
                    <label htmlFor="email" className='block text-sm font-semibold text-zinc-50'>Email:</label>
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
                    <label htmlFor="pwd" className='block text-sm font-semibold text-zinc-50'>Password:</label>
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
