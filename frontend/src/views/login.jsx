import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'


const Login = () => {


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [sec, setSec] = useState('');
    const cookie = new Cookies();
    
    
    const submit = (e) => {
        e.preventDefault();
        const data = new FormData();
        
        data.append('email', email)
        data.append('password', pass)
        axios.post('http://localhost:8000/api/login', data)
        .then((res) => {
            setSec(res.data.user);
        })
    }
    useEffect(() => {
        cookie.set('authorisation', sec);
        const get = cookie.get('authorisation');
        if (get.email == email) {
            window.location.href = '/';
        }
    }, [sec])
    
    return (
        <div className='w-full flex justify-center items-center h-screen'>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input onChange={(e) => setPass(e.target.value)} className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
