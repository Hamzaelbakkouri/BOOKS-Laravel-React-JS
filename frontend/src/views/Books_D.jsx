import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
} from 'mdb-react-ui-kit';
import axios from 'axios';


function Books_D() {
  const [data, setData] = useState([]);
  const [book, setBook] = useState();
  const [info, setInfo] = useState('');


  const up = (prop) => {
      setInfo(prop);
    localStorage.setItem('info', info);
    const inf = localStorage.getItem('info');
    if (inf) {
      window.location.href = '/updatebook';
    }
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/admin/getLivres')
      .then((res) => {
        setData(res.data);
      })
  }, [])


  useEffect(() => {
    axios({
      method: 'PATCH',
      url: 'http://127.0.0.1:8000/api/livre/supprimerLivre/' + book + '',
    })
      .then(() => {
        axios.get('http://127.0.0.1:8000/api/admin/getLivres')
          .then((res) => {
            setData(res.data);
          })
      })
  }, [book])

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
                  <th>Name</th>
                  <th>Image</th>
                  <th>PDF</th>
                  <th>Categorie</th>
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
                            <p className='fw-bold mb-1'>{dat.nom_livre}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className='fw-normal mb-1'>
                          <img
                            src={dat.image}
                            alt=''
                            style={{ width: '45px', height: '45px' }}
                            className='rounded'
                          />
                        </p>
                      </td>
                      <td>
                        <MDBBadge light color='success' pill>
                          {dat.pdf}
                        </MDBBadge>
                      </td>
                      <td>
                        {dat.nom_cat}
                      </td>
                      <td>
                        <MDBBtn onClick={() => setBook(dat.id)} className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                          Delete
                        </MDBBtn>
                        <MDBBtn onClick={() => {
                            up(dat.id);
                        }
                        } className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
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
  );
}

export default Books_D
