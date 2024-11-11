import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function UpdatePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state?.user;

  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [profession, setProfession] = useState(user.profession);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { name, phone, profession };
      await axios.put(`http://localhost:5000/api/users/${user._id}`, updatedUser);
      setMessage('User updated successfully!');
      navigate('/home'); 
    } catch (error) {
      setMessage('Error updating user');
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      {message && <div>{message}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
         </Form.Group>

         <Form.Group controlId="formProfession">
          <Form.Label>Profession</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter profession"
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
          />
         </Form.Group>

         <Button variant="primary" type="submit">
          Update
         </Button>
      </Form>
    </div>
  );
}

export default UpdatePage;
