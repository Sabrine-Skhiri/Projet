import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../JS/Actions/user";

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Adresse email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="text-center">
              <Button 
                variant="primary" 
                type="submit" 
                style={{ 
                  backgroundColor: '#e64a19', 
                  borderColor: '#e64a19', 
                  marginTop: '20px', 
                  color: 'white', 
                  padding: '10px 20px', 
                  borderRadius: '5px' 
                }}
              >
                Se connecter
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;


