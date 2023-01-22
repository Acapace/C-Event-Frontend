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
import Blog from './components/Blog.js';

// -------------------------------------------------------------------------- \\


const App = () => {





  // --------------------
  // HOOKS
  // --------------------
  const [blog, setBlog] = useState([])
  const [product, setProduct] = useState([])

  //---------
  //EDIT Modal
  //----------

  // const [blogEditItem, setBlogItem] = useState({})



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
      .get('https://sleepy-beach-54831.herokuapp.com/api/blog')
      .then(
        (response) => setBlog(response.data),
        (err) => console.log(err)
      )

  }

  const handleCreate = (addBlogEntry) => {
    axios
      .post('https://sleepy-beach-54831.herokuapp.com/api/blog', addBlogEntry)
      .then((response) => {
        console.log(response);
        getBlog()
      })
  }


  const handleDelete = (id) => {
    axios
      .delete('https://sleepy-beach-54831.herokuapp.com/api/blog/' + id)
      .then((response) => {
        getBlog()
      })
  }


  const handleUpdate = (editBlog) => {
    console.log(editBlog)
    axios
      .put('https://sleepy-beach-54831.herokuapp.com/api/blog/' + editBlog.id, editBlog)
      .then((response) => {
        console.log(response)
        getBlog()
      })
  }

  ///////////PRODUCTS///////////
  const getProduct = () => {
    axios
      .get('https://sleepy-beach-54831.herokuapp.com/api/products')
      .then(
        (response) => setProduct(response.data),
        (err) => console.log(err)
      )

  }

  const handleCreateProduct = (addProductEntry) => {
    axios
      .post('https://sleepy-beach-54831.herokuapp.com/api/products', addProductEntry)
      .then((response) => {
        console.log(response);
        getProduct()
      })
  }

  const handleDeleteProduct = (id) => {
    axios
      .delete('https://sleepy-beach-54831.herokuapp.com/api/products/' + id)
      .then((response) => {
        getProduct()
      })
  }


  const handleUpdateProduct = (editProduct) => {
    axios
      .put('https://sleepy-beach-54831.herokuapp.com/api/products/' + editProduct.id, editProduct)
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
          <Navbar.Brand href="#home">A.AUTO EVENTS</Navbar.Brand>
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
              src="images/1.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>NYC Auto Events</h3>
              <p> "Life Is Too Short To Drive Boring Cars"</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/4.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>CHICAGO AUTO EVENTS</h3>
              <p>"Almost Everything Started From Nothing"</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="images/7.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>CA AUTO EVENTS</h3>
              <p>
                "It All Starts With A Dream"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <br></br>
        <view style={{ textAlign: "center" }} >
          <h1>Welcome to A.Auto Events </h1>
          <p>
            Brought to you by A.Capace
          </p>
        </view>


      </> : <></>
      }

      {/* SHOWS BLOG SECTION */}
      {
        showBlog ? <>

          <view style={{ textAlign: "center" }} >
            <br></br>
            <h1>A.Auto Events : Blog</h1>
            <h4>Please Share...</h4>
            <br></br>
          </view>

          <Add handleCreate={handleCreate} />
          <div className="Blog">
            {
              blog.map((blogItem) => {
                return (
                  <div className="blog" key={blogItem._id} >
                    <Blog blogItem={blogItem} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                  </div>
                )
              })
            }
          </div>

        </> : <>
        </>
      }

      {/* SHOWS PRODUCT SECTION */}
      {
        showProduct ? <>

          <view style={{ textAlign: "center" }} >
            <br></br>
            <h1>Available Merchandise:</h1>
            <br></br>
          </view>

          {/* <Addproduct handleCreateProduct={handleCreateProduct} /> */}
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
                                <ListGroup.Item>Vendor: {product.vendor.name} </ListGroup.Item>
                                <ListGroup.Item>Item: {product.name} </ListGroup.Item>
                                <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                                <ListGroup.Item>Price $: {product.price} </ListGroup.Item>
                                <ListGroup.Item>
                                  Catergory:
                                  {product.category.map((obj) => {
                                    return <p>{obj.name}</p>
                                  })}
                                </ListGroup.Item>
                                <Card.Img variant="top" src={product.image_link} />
                              </ListGroup>
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

        </> : <></>
      }


    </>
  )
}

export default App
