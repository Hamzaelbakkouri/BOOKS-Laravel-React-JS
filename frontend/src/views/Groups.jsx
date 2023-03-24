import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardLink, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function Groups() {

  

  return (
    <div className='w-full flex justify-evenly'>
      <MDBCard className='w-72 text-black'>
        <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
        <MDBListGroup flush>
          <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
        </MDBListGroup>
        <MDBCardBody>
          <MDBCardLink href='#'>Join Group</MDBCardLink>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}