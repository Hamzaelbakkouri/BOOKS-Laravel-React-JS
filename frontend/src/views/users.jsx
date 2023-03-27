import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
} from 'mdb-react-ui-kit';
import axios from 'axios';

const Users = () => {

  const [data, seDt] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/admin/getUsers')
      .then((res) => {
        seDt(res.data);
      })
  }, [])

  return (
    <div>
      <MDBContainer fluid>
        <div className='w-full flex justify-center mt-10 text-4xl'>Users DASHBOARD</div>
        <section>
          <MDBBtn className='fw-bold mt-5' color='link' rounded size='sm' rippleColor='dark'>
          </MDBBtn>
          <div className='shadow-4 rounded-5 overflow-hidden flex flex-col min-h-screen mt-10'>
            <MDBTable>
              <MDBTableHead light>
                <tr>
                  <th>first Name</th>
                  <th>last Name</th>
                  <th>Email</th>
                  <th>created_at</th>
                </tr>
              </MDBTableHead>
              {data.map((dat) => {
                return (
                  <MDBTableBody className='text-white' style={{ verticalAlign: 'middle' }} key={dat.id}>
                    <tr>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='ms-3'>
                            <p className='fw-bold mb-1'>{dat.prenom}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='ms-3'>
                            <p className='fw-bold mb-1'>{dat.nom}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <div className='ms-3'>
                            <p className='fw-bold mb-1'>{dat.email}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='flex align-items-center'>
                          <div className='ms-3'>
                            <p className='mb-1'>{dat.created_at}</p>
                          </div>
                        </div>
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

export default Users
