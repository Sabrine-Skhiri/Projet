import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
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
    <Form onSubmit={handleUser}>
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
      <Button variant="primary" type="submit">
        Se connecter
      </Button>
    </Form>
  );
};

export default Login;
