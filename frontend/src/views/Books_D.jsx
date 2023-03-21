import React from 'react';
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody, MDBBadge, MDBBtn } from 'mdb-react-ui-kit';

function Books_D() {
  return (
    <MDBContainer fluid>
      <section>
      <MDBBtn className='fw-bold mt-5' color='link' rounded size='sm' rippleColor='dark'>
                    ADD BOOK
                  </MDBBtn>
        <div className='shadow-4 rounded-5 overflow-hidden flex flex-col min-h-screen mt-10'>
          
          <MDBTable>
            <MDBTableHead light>
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody className='text-white' style={{ verticalAlign: 'middle' }}>
              <tr>
                <td>
                  <div className='d-flex align-items-center'>
                    <img
                      src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                      alt=''
                      style={{ width: '45px', height: '45px' }}
                      className='rounded-circle'
                    />
                    <div className='ms-3'>
                      <p className='fw-bold mb-1'>John Doe</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className='fw-normal mb-1'>Software engineer</p>
                </td>
                <td>
                  <MDBBadge light color='success' pill>
                    Active
                  </MDBBadge>
                </td>
                <td>Senior</td>
                <td>
                  <MDBBtn className='fw-bold' color='link' rounded size='sm' rippleColor='dark'>
                    Edit
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </section>
    </MDBContainer>
  );
}

export default Books_D
