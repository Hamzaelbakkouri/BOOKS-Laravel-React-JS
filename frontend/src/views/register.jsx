import axios from 'axios'
import React, { useState } from 'react'


const Register = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const sign = (e) => {
        e.preventDefault();

        // useEffect(() => {

        const data = new FormData();
        data.append('nom', fname);
        data.append('prenom', lname);
        data.append('email', email);
        data.append('password', password);
        data.append('confirmation', confirm);

        axios.post('http://localhost:8000/api/signup', data)
            .then((res) => {
                console.log(res.data);
                window.location.href = '/login'
            })
        // })
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={sign}>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            First Name
                        </label>
                        <input onChange={(e) => setFname(e.target.value)} className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Last Name
                        </label>
                        <input onChange={(e) => setLname(e.target.value)} className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="lname" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} className=" bg-white shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Enter Your Email" />
                        <p className="text-red-500 text-xs italic"></p>
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Password
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} className="bg-white shadow appearance-none border  rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic"></p>
                    </div>
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Confirm Password
                        </label>
                        <input onChange={(e) => setConfirm(e.target.value)} className=" bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic"></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;