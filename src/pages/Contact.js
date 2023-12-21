import React, { useState } from 'react';
import { Container, Form, Button, Toast } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react'

export const Contact =() =>{
    const [state, handleSubmit] = useForm('xrgnzaoj');
    const [showToast, setShowToast] = useState(false);
  
    const handleToastClose = () => {
      setShowToast(false);
    };
  
    const handleToastShow = () => {
      setShowToast(true);
    };
  
    return (
        <Container style={{ backgroundColor: '#66d9ff' }} className="py-5">
        <p className="text-center mb-3">Make sure to provide all necessary details in your message.</p>
        <Form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent form submission if validation fails
            if (e.target.checkValidity()) {
              handleSubmit(e);
              handleToastShow();
            }
          }}
          className="d-flex flex-column align-items-center"
        >
          <Form.Group controlId="email" className="w-100">
            <Form.Label className="text-center">Email Address</Form.Label>
            <Form.Control type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Form.Group>
  
          <Form.Group controlId="message" className="w-100">
            <Form.Label className="text-center">Message</Form.Label>
            <Form.Control as="textarea" name="message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </Form.Group>
  
          <Button variant="primary" type="submit" disabled={state.submitting} className="mt-3">
            Submit
          </Button>
        </Form>
  
        <Toast show={showToast} onClose={handleToastClose} delay={3000} autohide style={{ position: 'absolute', top: 20, right: 20 }}>
          <Toast.Header>
            <strong className="mr-auto">Mail Sent</strong>
          </Toast.Header>
          <Toast.Body>Your message has been sent successfully!</Toast.Body>
        </Toast>
        <p className="text-center mb-3">*by clicking submit you agree to the website rules and the use of external services </p>
      </Container>
    );
};