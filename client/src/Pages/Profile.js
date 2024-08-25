import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';

const Profile = () => {
    const user = useSelector((state) => state.userReducer.user);

    return (
        <div>
            <Card style={{ width: '18rem' }}>
               
                <Card.Body>
                    <Card.Title>{user && user.name}</Card.Title>
                    <Card.Text>{user && user.email}</Card.Text>
                    <Card.Text>{user && user.phone}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Profile;
