import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

const Create_G = () => {
    const [name, setName] = useState();
    const [desc, setDesc] = useState();
    const [image, setImage] = useState();
    const [id_user, setId_u] = useState();

    const cookie = new Cookies();

    const add = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('nom', name);
        form.append('description', desc);
        form.append('id_user', id_user);
        form.append('image', image);
        axios.post('http://127.0.0.1:8000/api/groupe/creerUngroupe', form)
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Group Add success',
                    'success'
                )
                window.location.href = '/groups';
            })
    }

    useEffect(() => {
        const data = cookie.get('authorisation');
        setId_u(data.id);
        // console.log(id_user);
    }, [id_user])
    return (
        <div className=' flex justify-center'>
            <form className="w-full max-w-sm " onSubmit={add}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Name
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setName(e.target.value)} placeholder='Book Name' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Description
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setDesc(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder="description" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Image
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input onChange={(e) => setImage(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="file" placeholder="image" />
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                            ADD GROUP
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Create_G
