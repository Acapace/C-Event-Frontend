import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';


export default function EditModal(props) {

    // const handleDelete = (event) => {
    //     onDelete(blog.id)
    // }




    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);



    const [blog, setBlog] = useState({ ...props.blog })

    const handleChange = (event) => {
        setBlog({ ...blog, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleUpdate(blog)
    }

    return (
        // <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal {...props} >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Edit Blog Entry :
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Label>Event Name:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Label>Event Location:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Label>Topic:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Label>Text:</Form.Label>
                        <Form.Control type="text" placeholder="" as="textarea" rows={3} />

                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" size="sm" onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>
    );
}