
import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Profile = () => {
    const user = useSelector((state) => state.userReducer.user);

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>  
                    <Card 
                        style={{ 
                            width: '100%',  
                            padding: "20px", 
                            border: "1px solid #e64a19", 
                            borderRadius: "10px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                            marginTop: "50px"
                        }}
                    >
                        <Card.Body>
                            <Card.Title>{user && user.name}</Card.Title>
                            <Card.Text>{user && user.email}</Card.Text>
                            <Card.Text>{user && user.phone}</Card.Text>
                            <Link to="/">
                                <Button variant="primary" style={{ backgroundColor: "#e64a19", borderColor: "#e64a19" }}>
                                    Page d'accueil
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
