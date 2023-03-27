import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

const Chat = () => {
    const [message, setMessage] = useState();
    const [group_id, setGroup_ID] = useState('');
    const [data, setData] = useState([]);
    const [user_ID, setUser] = useState();
    const [members, setMembers] = useState([]);

    const cookie = new Cookies();
    const get = cookie.get('authorisation');

    useEffect(() => {
        setUser(get.id);
    }, [])

    useEffect(() => {
        setGroup_ID(localStorage.getItem('Group'));
    }, [])

    useEffect(() => {
        if (group_id) {
            axios.get('http://localhost:8000/api/messages/' + group_id + '')
                .then((res) => {
                    console.log(res.data);
                    setData(res.data);
                })
        }
    }, [group_id])

    useEffect(() => {
        axios.get('http://localhost:8000/api/membres/'+group_id)
            .then((res) => {
                setMembers(res.data);
            })
    }, [])

    const send = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append('idgroup', group_id);
        form.append('iduser', user_ID);
        form.append('message', message);
        axios.post('http://localhost:8000/api/messages', form)
            .then(() => {
                document.getElementById('messageinput').value = "";
                setMessage('');
                axios.get('http://localhost:8000/api/messages/' + group_id + '')
                    .then((res) => {
                        setData(res.data);
                    })
            })
    }

    return (
        <div>
            <section >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card" id="chat3" >
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                                            {members.map((member) => {
                                                return (
                                                    <div className="p-3">
                                                        <div data-mdb-perfect-scrollbar="true">
                                                            <ul className="list-unstyled mb-0">
                                                                <li className="p-2 border-bottom">
                                                                    <a href="#!" className="d-flex justify-content-between">
                                                                        <div className="d-flex flex-row">
                                                                            <div>
                                                                                <img
                                                                                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                                                                <span className="badge bg-success badge-dot"></span>
                                                                            </div>
                                                                            <div className="pt-1">
                                                                                <p className="fw-bold mb-0">{member.nom}</p>
                                                                                <p className="small text-muted">{member.prenom}</p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="pt-1">
                                                                            <p className="small text-muted mb-1">Just now</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        <div className="col-md-6 col-lg-7 col-xl-8 ">
                                            <div className="overflow-y-auto h-80 text-black" data-mdb-perfect-scrollbar="true">
                                                {data.map((item) => {
                                                    {
                                                        return (
                                                            <div className={item.id_user != get.id ? "justify-content-start  d-flex flex-row h-20 text-black" : "justify-content-end  d-flex flex-row h-20 text-black"} key={item.id_user}>
                                                                <img className='h-10 w-10 m-0' src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                                                    alt="avatar 1" />
                                                                <div className='text-black'>
                                                                    <p className={item.id_user != get.id ? "small p-2 ms-3 mb-1 border rounded-3 mt-7 text-black" : "bg-primary small p-2 ms-3 mb-1 border rounded-3 mt-7 text-white"} >{item.message}</p>
                                                                    <p className={item.id_user != get.id ? "float-start ms-3 small mb-3 rounded-3 text-muted text-black" : "float-end me-3 small mb-3 rounded-3 text-muted text-black"}>{item.prenom}&#160;{item.nom}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </div>

                                            <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2 h-20">
                                                <input onChange={(e) => setMessage(e.target.value)} type="text" className="form-control form-control-lg" id="messageinput"
                                                    placeholder="Type message" />
                                                <button type='submit' onClick={send} className="ms-3"><i className="fas fa-paper-plane"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Chat
