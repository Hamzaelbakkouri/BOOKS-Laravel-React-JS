import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
} from 'mdb-react-ui-kit';
import axios from 'axios';

const Categorie = () => {

    const [data, seDt] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/admin/getCats')
            .then((res) => {
                seDt(res.data);
            })
    }, [])

    return (
        <div>
            <MDBContainer fluid>
                <div className='w-full flex justify-center mt-10 text-4xl'>BOOK DASHBOARD</div>
                <section>
                    <MDBBtn href='/addbook' className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                        ADD BOOK
                    </MDBBtn>
                    <MDBBtn className='fw-bold mt-5' color='link' rounded size='sm' rippleColor='dark'>
                    </MDBBtn>
                    <div className='shadow-4 rounded-5 overflow-hidden flex flex-col min-h-screen mt-10'>
                        <MDBTable>
                            <MDBTableHead light>
                                <tr>
                                    <th>Id</th>
                                    <th>Categorie Name</th>
                                    <th>Actions</th>
                                </tr>
                            </MDBTableHead>
                            {data.map((dat) => {
                                return (
                                    <MDBTableBody className='text-white' style={{ verticalAlign: 'middle' }} key={dat.id}>
                                        <tr>
                                            <td>
                                                <div className='d-flex align-items-center'>
                                                    <div className='ms-3'>
                                                        <p className='fw-bold mb-1'>{dat.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className='fw-normal mb-1'>
                                                    {dat.nom}
                                                </p>
                                            </td>
                                            <td>
                                                <MDBBtn className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                                                    Delete
                                                </MDBBtn>
                                                <MDBBtn className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                                                    Update
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                    </MDBTableBody>
                                )
                            })}
                        </MDBTable>
                    </div>
                </section>
            </MDBContainer>
        </div>
    )
}

export default Categorie
