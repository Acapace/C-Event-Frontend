import React, { useState, useEffect } from 'react'
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';

const Addproduct = (props) => {

    let emptyProduct = { name: '', description: '', price: '', image_link: '' }
    const [product, setProduct] = useState(emptyProduct)

    const handleChangeProduct = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    const handleSubmitProduct = (event) => {
        event.preventDefault()
        props.handleCreateProduct(product)
    }

    return (
        <>


            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{ width: '43rem' }} >

                            <Form style={{ width: '40rem' }} onSubmit={handleSubmitProduct} >
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    {/* 
                                    <Form.Label htmlFor="date">Vendor::</Form.Label>
                                    <Form.Control size="sm" type="text" name="name" value={product.vendor.name} onChange={handleChangeProduct} placeholder="" /> */}




                                    <Form.Label htmlFor="date">Item:</Form.Label>
                                    <Form.Control size="sm" type="text" name="name" value={product.name} onChange={handleChangeProduct} placeholder="" />
                                    <Form.Label>Item Description:</Form.Label>
                                    <Form.Control size="sm" type="text" name="description" value={product.description} onChange={handleChangeProduct} placeholder="" />
                                    <Form.Label>Price $:</Form.Label>
                                    <Form.Control size="sm" type="text" name="location" value={product.price} onChange={handleChangeProduct} placeholder="" />
                                    <Form.Label>Item Image:</Form.Label>
                                    <Form.Control size="sm" type="text" name="Iten:" value={product.image_link} onChange={handleChangeProduct} placeholder="" />
                                    <Button variant="primary" as="input" type="submit" />
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

export default Addproduct