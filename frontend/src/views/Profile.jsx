import React, { useEffect, useState } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
} from 'mdb-react-ui-kit';
import Cookies from 'universal-cookie';
import axios from 'axios';


const Profile = () => {

    const [role, setRole] = useState('');
    const [check, setcheck] = useState();
    useEffect(() => {
        if (role.role === 0) {
            setcheck('User');
        } else {
            setcheck('Admin');
        }
    }, [])
    // const [id, setId] = useState();

    const Delete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/user/supprimerCompte', {
            params: {
                id: get.id
            }
        })
            .then((e) => {
                cookie.remove('authorisation')
                    window.location.href = "/"
                
            })
    }

    const update = (e) => {
        e.preventDefault();
    }

    const cookie = new Cookies();
    const get = cookie.get('authorisation');

    useEffect(() => {
        setRole(get);
    }, [])

    return (
        <section>
            <MDBContainer className="py-5">
                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />

                                <p className="text-muted mb-1">{check}</p>
                                <p className="text-muted mb-4">Morocco</p>
                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4 text-black">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Full Name</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted ">{role.nom}&#160;{role.prenom}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{role.email}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Profile created_at :</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">{role.created_at}</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="d-flex justify-content-center pb-6">
                <MDBBtn onClick={Delete} outline className="ms-1 "><p className='mt-2 text-red-600'>Delete Profile</p></MDBBtn>
                <MDBBtn onClick={update} outline className="ms-1 "><p className='mt-2 text-blue-600'>Update Profile</p></MDBBtn>
            </div>
        </section>
    );
}
export default Profile
