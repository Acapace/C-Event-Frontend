import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
// -------------------------------------------------------------------------- \\

const Add = (props) => {

    let emptyBlog = { date: '', name: '', location: '', topic: '', text: '' }
    const [blog, setBlog] = useState(emptyBlog)

    const handleChange = (event) => {
        setBlog({ ...blog, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(blog)
    }


    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '43rem' }} >
                            <Form class="center-text" style={{ width: '40rem' }} onSubmit={handleSubmit} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label htmlFor="date">Date:</Form.Label>
                                    <Form.Control size="sm" type="text" name="date" value={blog.date} onChange={handleChange} placeholder="" />
                                    <Form.Label>Event Name:</Form.Label>
                                    <Form.Control size="sm" type="text" name="name" value={blog.name} onChange={handleChange} placeholder="" />
                                    <Form.Label>Event location:</Form.Label>
                                    <Form.Control size="sm" type="text" name="location" value={blog.location} onChange={handleChange} placeholder="" />
                                    <Form.Label>Topic:</Form.Label>
                                    <Form.Control size="sm" type="text" name="topic" value={blog.topic} onChange={handleChange} placeholder="" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Post:</Form.Label>
                                    <Form.Control size="sm" as="textarea" rows={5} type="text" name="text" value={blog.text} onChange={handleChange} />
                                    <br />
                                    <div className="d-grid gap-2">
                                        <Button variant="primary" as="input" type="submit" />
                                    </div>
                                </Form.Group>
                            </Form>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </>
    )
}

export default Add