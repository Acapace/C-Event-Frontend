import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Add from './components/Add.js'
import Addproduct from './components/Addproduct.js'
import Edit from './components/Edit.js'
import Editproduct from './components/Editproduct.js'
import EditModal from './components/EditModal.js'
// -------------------------------------------------------------------------- \\
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Card, ListGroup, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

// -------------------------------------------------------------------------- \\


const App = () => {

  // --------------------
  // HOOKS
  // --------------------
  let [blog, setBlog] = useState([])
  let [product, setProduct] = useState([])

  //---------
  //EDIT Modal
  //----------
  const [modalShow, setModalShow] = useState(false);



  // --------------------
  // Setting parts to show or hide depending on button clicked
  // --------------------
  const [showBlog, setShowBlog] = useState(true)
  const [showProduct, setShowProduct] = useState(false)
  const [showHomePage, setShowHomePage] = useState(false)


  const homePageVisibility = () => {
    setShowProduct(false)
    setShowBlog(false)
    setShowHomePage(true)
  }

  const productVisibility = () => {
    setShowProduct(true)
    setShowBlog(false)
    setShowHomePage(false)
  }

  const blogVisibility = () => {
    setShowProduct(false)
    setShowBlog(true)
    setShowHomePage(false)
  }

  // --------------------
  // Our API Calls
  // --------------------

  ///////////BLOG///////////
  const getBlog = () => {
    axios
      .get('http://localhost:8000/api/blog')
      .then(
        (response) => setBlog(response.data),
        (err) => console.log(err)
      )

  }

  const handleCreate = (addBlogEntry) => {
    axios
      .post('http://localhost:8000/api/blog', addBlogEntry)
      .then((response) => {
        console.log(response);
        getBlog()
      })
  }

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/blog/' + event.target.value)
      .then((response) => {
        getBlog()
      })
  }


  const handleUpdate = (editBlog) => {
    axios
      .put('http://localhost:8000/api/blog/' + editBlog.id, editBlog)
      .then((response) => {
        getBlog()
      })
  }

  ///////////PRODUCTS///////////
  const getProduct = () => {
    axios
      .get('http://localhost:8000/api/products')
      .then(
        (response) => setProduct(response.data),
        (err) => console.log(err)
      )

  }

  const handleCreateProduct = (addProductEntry) => {
    axios
      .post('http://localhost:8000/api/products', addProductEntry)
      .then((response) => {
        console.log(response);
        getProduct()
      })
  }

  const handleDeleteProduct = (event) => {
    axios
      .delete('http://localhost:8000/api/products/' + event.target.value)
      .then((response) => {
        getProduct()
      })
  }


  const handleUpdateProduct = (editProduct) => {
    axios
      .put('http://localhost:8000/api/products/' + editProduct.id, editProduct)
      .then((response) => {
        getProduct()
      })
  }



  useEffect(() => {
    getBlog()
    getProduct()
  }, [])


  return (
    <>

      {/* NAV BAR WITH LINK TO EACH PAGE */}
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">CAR EVENTS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={homePageVisibility}>Home</Nav.Link>
            <Nav.Link href="#features" onClick={blogVisibility}>Blog</Nav.Link>
            <Nav.Link href="#pricing" onClick={productVisibility}>Store</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      {showHomePage ? <>

        {/* CAROUSEL FOR HOME PAGE */}
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/z.png"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-5"
              src=""
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </> : <></>}

      {/* SHOWS BLOG SECTION */}
      {showBlog ? <>
        <h1> Car Event Blog</h1>
        <Add handleCreate={handleCreate} />
        <div className="Blog">
          {
            blog.map((blog) => {
              return (

                <div className="blog" key={blog.id} >
                  <Container>
                    <Row>
                      <Col></Col>
                      <Col>
                        <Card style={{ width: '30rem' }}>
                          <Card.Body>
                            <ListGroup variant="flush">
                              <Card.Header>
                                <ListGroup.Item>Date: {blog.date} </ListGroup.Item>
                              </Card.Header>
                              <ListGroup.Item>Event Name: {blog.name}</ListGroup.Item>
                              <ListGroup.Item>Event Location: {blog.location} </ListGroup.Item>
                              <ListGroup.Item>Topic: {blog.topic}</ListGroup.Item>
                              <ListGroup.Item>Text: {blog.text}</ListGroup.Item>
                            </ListGroup>
                            {/* <Edit handleUpdate={handleUpdate} blog={blog} /> */}


                            <Button variant="outline-primary" size="sm" onClick={() => setModalShow(true)}>
                              Edit
                            </Button>


                          </Card.Body>
                        </Card>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Container>
                </div>
              )
            })
          }
        </div>

      </> : <>
      </>}

      <EditModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onDelete={handleDelete}
      />






      {/* SHOWS PRODUCT SECTION */}
      {showProduct ? <>
        <h1>Merchandise</h1>
        <Addproduct handleCreateProduct={handleCreateProduct} />
        <div className="product">
          {
            product.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <Container>
                    <Row>
                      <Col></Col>
                      <Col>
                        <Card style={{ width: '30rem' }}>
                          <Card.Body >
                            <ListGroup variant="flush">
                              <ListGroup.Item>Item: {product.name} </ListGroup.Item>
                              <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                              <ListGroup.Item>Price $: {product.price} </ListGroup.Item>
                              <ListGroup.Item>Item Image: {product.image_link}</ListGroup.Item>
                            </ListGroup>
                            <Editproduct handleUpdateProduct={handleUpdateProduct} product={product} />
                            <Button onClick={handleDelete} value={product.id}>Delete</Button>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col>
                      </Col>
                    </Row>
                  </Container>
                </div>
              )
            })
          }
        </div>

      </> : <></>}


    </>
  )
}

export default App
