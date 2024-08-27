import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { register } from '../JS/Actions/user';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [newUser, setNewUser] = useState({ name: '', email: '', password: '', phone: '' });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    };

    const handleUser = (e) => {
        e.preventDefault();
        dispatch(register(newUser));
        navigate("/profile");
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <Form 
                        onSubmit={handleUser} 
                        style={{ 
                            marginTop: "50px", 
                            padding: "20px", 
                            border: "1px solid #e64a19", 
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                        }}
                    >
                        <Form.Group controlId="formName">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Nom" 
                                name='name' 
                                value={newUser.name}
                                onChange={handleChange} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Adresse email</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Adresse email" 
                                name="email" 
                                value={newUser.email}
                                onChange={handleChange} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Mot de passe" 
                                name="password" 
                                value={newUser.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>Numéro de téléphone</Form.Label>
                            <Form.Control 
                                type="tel" 
                                placeholder="Numéro de téléphone" 
                                name="phone" 
                                value={newUser.phone}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button 
                                variant="primary" 
                                type="submit" 
                                style={{ 
                                    backgroundColor: "#e64a19", 
                                    borderColor: "#e64a19", 
                                    marginTop: "20px", 
                                    color: 'white', 
                                    padding: '10px 20px', 
                                    borderRadius: '5px' 
                                }}
                            >
                                S'inscrire 
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;
