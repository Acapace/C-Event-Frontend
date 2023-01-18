import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Add from './components/Add.js'
import Addproduct from './components/Addproduct.js'
import Edit from './components/Edit.js'
import Editproduct from './components/Editproduct.js'



// -------------------------------------------------------------------------- \\


const App = () => {

  // --------------------
  // HOOKS
  // --------------------
  let [blog, setBlog] = useState([])
  let [product, setProduct] = useState([])

  // --------------------
  // Setting parts to show or hide depending on button clicked
  // --------------------
  const [showBlog, setShowBlog] = useState(true)
  const [showProduct, setShowProduct] = useState(false)


  const productVisibility = () => {
    setShowProduct(true)
    setShowBlog(false)
  }

  const blogVisibility = () => {
    setShowProduct(false)
    setShowBlog(true)
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


      {/* BUTTONS TO CLICK FOR THE SCREEN TO SHOW */}
      <list>
        <button onClick={blogVisibility}>Blog</button>
      </list>
      <br />
      <list>
        <button onClick={productVisibility}>Product</button>
      </list>


      {/* SHOWS BLOG SECTION */}
      {showBlog ? <>
        <h1> Car Event Blog</h1>
        <Add handleCreate={handleCreate} />
        <div className="Blog">
          {
            blog.map((blog) => {
              return (
                <div className="blog" key={blog.id}>
                  <h4>Date: {blog.date}</h4>
                  <h4>Event Name: {blog.name}</h4>
                  <h4>Event Location: {blog.location}</h4>
                  <h4>Topic: {blog.topic}</h4>
                  <h4>Text: {blog.text}</h4>
                  <Edit handleUpdate={handleUpdate} blog={blog} />
                  <br />
                  <button onClick={handleDelete} value={blog.id}>Delete</button>
                </div>
              )
            })
          }
        </div>

      </> : <></>}


      {/* SHOWS PRODUCT SECTION */}
      {showProduct ? <>
        <h1>Merchandise</h1>
        <Addproduct handleCreateProduct={handleCreateProduct} />
        <div className="product">
          {
            product.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <h4>Name: {product.name}</h4>
                  <h4>Description: {product.description}</h4>
                  <h4>Price $: {product.price}</h4>
                  <h4>Image: {product.image_link}</h4>
                  <Editproduct handleUpdateProduct={handleUpdateProduct} product={product} />
                  <br />
                  <button onClick={handleDeleteProduct} value={product.id}> Delete</button>
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
