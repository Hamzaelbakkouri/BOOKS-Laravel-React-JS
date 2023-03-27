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
import {
    Button,
    useDisclosure,
    Modal,
    ModalFooter,
    Input,
    FormLabel,
    FormControl,
    ModalBody,
    ModalCloseButton,
    ModalHeader,
    ModalContent,
    ModalOverlay,
} from '@chakra-ui/react'
import Cookies from 'universal-cookie';
import axios from 'axios';
import { ChakraProvider } from '@chakra-ui/react'



const Profile = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [upName, setUPName] = useState('');
    const [upLast, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [role, setRole] = useState('');
    const [check, setcheck] = useState();
    useEffect(() => {
        setPass(role.password);
        setLast(role.nom);
        setUPName(role.prenom);
        setEmail(role.email);
        if (role.role == 0) {
            setcheck('User');
        } else {
            setcheck('Admin');
        }
    }, [])

    const Delete = (e) => {
        e.preventDefault();
        axios.delete('http://localhost:8000/api/user/supprimerCompte', {
            params: {
                id: get.id
            }
        })
            .then((e) => {
                cookie.remove('authorisation');
                window.location.href = "/"

            })
    }

    const update = (e) => {
        e.preventDefault();
        const form = new FormData();

        form.append('id', role.id);
        form.append('nom', upLast);
        form.append('prenom', upName);
        form.append('email', email);
        form.append('password', pass);
        fetch({
            method: 'PUT',
            url: 'http://localhost:8000/api/user/modifierCompte'
        }, form)
            .then(() => {
                alert('updated');

            })
    }

    const cookie = new Cookies();
    const get = cookie.get('authorisation');

    useEffect(() => {
        setRole(get);
    }, [])

    return (
        <section>
            <ChakraProvider>
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update your account</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input value={upName} onChange={(e) => setUPName(e.target.value)} ref={initialRef} placeholder='First name' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Last name</FormLabel>
                                <Input value={upLast} onChange={(e) => setLast(e.target.value)} placeholder='Last name' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Last name</FormLabel>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                            </FormControl>

                            <FormControl mt={4}>
                                <FormLabel>Last name</FormLabel>
                                <Input type="password" name="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Password' />
                            </FormControl>

                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={update} colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
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
                    <MDBBtn onClick={onOpen} outline className="ms-1 "><p className='mt-2 text-blue-600'>Update Profile</p></MDBBtn>
                </div>
            </ChakraProvider>
        </section>

    );
}
export default Profile
