import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';

const Groups = () => {

  const cookie = new Cookies();
  const id = cookie.get('authorisation');


  const [data, setData] = useState([]);
  const [id_g, setId_g] = useState();
  const [id_u, setId_u] = useState();



  const join = () => {
    setId_u(id.id);

    const form = new FormData();
    form.append('id_group', id_g);
    form.append('id_user', id_u);
    axios.post('http://127.0.0.1:8000/api/user/rejoindreGroup', form)
      .then((res) => {
        if (res.data) {
          Swal.fire(
            'Good job!',
            'You are now group member!',
            'success'
          )
        }
      })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/groupe/getGroups')
      .then((res) => {
        setData(res.data);
      })
  }, [])

  return (
    <div>
      <MDBBtn className='mb-6 mt-6' href='/addGroup' >Create Group</MDBBtn>
      <div className='w-full flex justify-evenly flex-wrap gap-10'>
        {data.map((item) => {
          return (
            <MDBCard className='w-72 text-black' key={item.id} >
              <MDBCardImage position='top' alt='...' src={item.image} />
              <MDBCardBody>
                <MDBCardTitle>{item.nom}</MDBCardTitle>
                <MDBCardText>
                  {item.description}
                </MDBCardText>
              </MDBCardBody>
              <MDBListGroup>
                <MDBListGroupItem>{item.created_at}</MDBListGroupItem>
              </MDBListGroup>
              <MDBBtn>
                <MDBCardLink className='text-white' onClick={() => {
                  setId_g(item.id);
                  join();
                }}>Join Group</MDBCardLink>
              </MDBBtn>
            </MDBCard>
          )
        })}
      </div>
    </div>
  );
}
export default Groups