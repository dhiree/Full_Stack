import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import UpdatePage from './components/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update" element={<UpdatePage />} />
          <Route path="/" element={<Navigate to="/register" />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
