import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';


const EditModal = (props) => {


    const [blog, setBlog] = useState({})
    // const [modalShow, setModalShow] = useState(false);

    const handleChange = (event) => {
        setBlog({ ...blog, [event.target.name]: event.target.value })
        //     setBlog({ [event.target.name]: event.target.value })
        // 
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleUpdate(blog)
        props.setModalShow(false)

    }

    const handleDelete = (event) => {
        // event.preventDefault();
        props.handleDelete(blog.id)
        props.setModalShow(false)
    }

    useEffect(() => {
        setBlog(props.blogItem)
    }, [props.blogItem])

    return (
        // <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal {...props} >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Edit Blog Entry :
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form  >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date:</Form.Label>
                        <Form.Control
                            name="date"
                            defaultValue={blog.date}
                            type="text"
                            onChange={handleChange}
                        />
                        <Form.Label>Event Name:</Form.Label>
                        <Form.Control
                            name="name"
                            type="text"
                            defaultValue={blog.name}
                            onChange={handleChange} />
                        <Form.Label>Event Location:</Form.Label>
                        <Form.Control
                            name="location"
                            type="text"
                            defaultValue={blog.location}
                            onChange={handleChange} />
                        <Form.Label>Topic:</Form.Label>
                        <Form.Control
                            name="topic"
                            type="text"
                            defaultValue={blog.topic}
                            onChange={handleChange} />
                        <Form.Label>Post:</Form.Label>
                        <Form.Control as="textarea" rows={3}
                            name="text"
                            type="text"
                            defaultValue={blog.text}
                            onChange={handleChange} />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" size="sm" onClick={handleSubmit} >Save</Button>
                <Button variant="outline-primary" size="sm" onClick={handleDelete} > Delete</Button>
                {/* <Button variant="outline-primary" size="sm" onClick={props.onHide}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    );
}

export default EditModal