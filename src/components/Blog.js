import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Card, ListGroup, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Edit from './Edit';
import EditModal from './EditModal';


const Blog = (props) => {

    const [modalShow, setModalShow] = useState(false);


    return (
        <>

            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <Card.Header>
                                        <ListGroup.Item>Date: {props.blogItem.date} </ListGroup.Item>
                                    </Card.Header>
                                    <ListGroup.Item>Event Name: {props.blogItem.name}</ListGroup.Item>
                                    <ListGroup.Item>Event Location: {props.blogItem.location} </ListGroup.Item>
                                    <ListGroup.Item>Topic: {props.blogItem.topic}</ListGroup.Item>
                                    <ListGroup.Item>Post: {props.blogItem.text}</ListGroup.Item>
                                </ListGroup>

                                {/* <Edit handleUpdate={props.handleUpdate} blog={props.blogItem} /> */}
                                <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)} >
                                    Edit
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <EditModal
                setModalShow={setModalShow}
                show={modalShow}
                onHide={() => setModalShow(false)}
                handleUpdate={props.handleUpdate}
                handleDelete={props.handleDelete}
                blogItem={props.blogItem}
            />






        </>
    )
}

export default Blog