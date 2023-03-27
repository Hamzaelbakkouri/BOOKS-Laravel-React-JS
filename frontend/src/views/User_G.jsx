import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

const User_G = () => {
    const [user_id, setId] = useState();
    const [datas, setDatas] = useState([]);
    const [group_id, setGroup_id] = useState('');

    useEffect(() => {
        const cooki = new Cookies();
        const cook = cooki.get('authorisation');
        setId(cook.id);
        axios.get('http://127.0.0.1:8000/api/user/getGroups/' + user_id + '')
            .then((res) => {
                setDatas(res.data);
            })
    }, [])


    const goChat = (prop) => {
        setGroup_id(prop);
        localStorage.setItem('Group', group_id);
        if (group_id) {
            window.location.href = '/chat';
        }
    }
    return (
        <div className='w-full flex justify-evenly flex-wrap gap-5'>
            {datas.map((item) => {
                return (
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={item.image} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.nom}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                                Exit Group
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </a>
                            <button onClick={() => {
                                goChat(item.id);
                            }} className=" ml-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Join CHAT
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default User_G
