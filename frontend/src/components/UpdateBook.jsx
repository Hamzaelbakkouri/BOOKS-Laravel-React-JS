import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UpdateBook = () => {
    const [dt, seDt] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [cat, setCat] = useState('');
    const [pdf, setPdf] = useState('');
    const [image, setImage] = useState('');

    const [upd, setUpd] = useState([]);


    useEffect(() => {
        setId(localStorage.getItem('info'));
        axios({
            method: 'GET',
            url: 'http://127.0.0.1:8000/api/livre/getlivre/' + id + '',
        })
            .then((res) => {
                setUpd(res.data);
            })
    }, [])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/admin/getCats')
            .then((res) => {
                seDt(res.data);
            })
    }, [])



    const update = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/livre/updateLivre', {
            id: id,
            image: image,
            nom: name,
            file: pdf,
            id_cat: cat
        })
            .then((res) => {
                console.log(res.data);
                window.location.href = '/Dashboard'
            })
    }

    return (
        <div className='w-full flex justify-center'>
            <form role="form" className=" w-96 text-center border border-light p-5" onSubmit={update} enctype="multipart/form-data">

                <p className="h4 mb-4">update Book</p>
                <label>Name</label>
                <input value={upd.nom} onChange={(e) => setName(e.target.value)} type="text" id="defaultSubscriptionFormPassword" className="form-control mb-4 text-black" placeholder="name" required />
                <label>Categorie</label>
                <select value={upd.id_cat} onChange={(e) => setCat(e.target.value)} className='form-control mb-4 text-black'>
                    {dt.map((dat) => {
                        return (
                            <option value={dat.id}>{dat.nom}</option>
                        )
                    })}
                </select>
                <label>Image</label>
                <input onChange={(e) => setImage(e.target.value)} type="file" id="defaultSubscriptionFormEmail" className="form-control mb-4 text-black" placeholder="image" />
                <label>PDF</label>
                <input onChange={(e) => setPdf(e.target.value)} type="file" id="defaultSubscriptionFormEmail" className="form-control mb-4 text-black" placeholder="PDF" />
                <button className="btn btn-info btn-block" type="submit" >Update</button>
            </form>
        </div>
    )
}

export default UpdateBook
