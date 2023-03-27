import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AddBook = () => {
    const [dt, seDt] = useState([]);
    const [name, setName] = useState('');
    const [cat, setCat] = useState('');
    const [pdf, setPdf] = useState('');
    const [image, setImage] = useState('');
    // useEffect(() => {
    //     console.log(name);
    // }, [name])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/admin/getCats')
            .then((res) => {
                seDt(res.data);
            })
    }, [])

    const insert = (e) => {
        e.preventDefault();

        const data = new FormData(document.getElementById('formHamza'));

        axios.post('http://127.0.0.1:8000/api/livre/addLivre', data, {
            headers: {
                'Content-Type' : "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data);
                window.location.href = '/Dashboard'
            })
    }

    return (
        <div className='w-full flex justify-center'>
            <form role="form" className=" w-96 text-center border border-light p-5" onSubmit={insert} enctype="multipart/form-data" id='formHamza'>

                <p className="h4 mb-4">ADD Book</p>
                <label>Name</label>
                <input onChange={(e) => setName(e.target.value)} name='nom' type="text" id="defaultSubscriptionFormPassword" className="form-control mb-4" placeholder="name" />
                <label>Categorie</label>
                <select onChange={(e) => setCat(e.target.value)} name='id_cat' className='form-control mb-4 text'>
                    {dt.map((dat) => {
                        return (
                            <option value={dat.id}>{dat.nom}</option>
                        )
                    })}
                </select>
                <label>Image</label>
                <input onChange={(e) => console.log(e.target.files[0])} name='image' type="file" id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="image" />
                <label>PDF</label>
                <input onChange={(e) =>  setPdf(e.target.value)} type="file" name='file' id="defaultSubscriptionFormEmail" className="form-control mb-4" placeholder="PDF" />
                <button className="btn btn-info btn-block" type="submit" >add</button>
            </form>

        </div>
    )
}

export default AddBook
