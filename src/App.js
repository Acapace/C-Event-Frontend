import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Add from './components/Add.js'
import Edit from './components/Edit.js'

// -------------------------------------------------------------------------- \\


const App = () => {

  // --------------------
  // HOOKS
  // --------------------
  let [Blog, setBlog] = useState([])



  // --------------------
  // Our API Calls
  // --------------------

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


  useEffect(() => {
    getBlog()
  }, [])


  return (
    <>
      <h1> CAR EVENTS BLOG</h1>
      <Add handleCreate={handleCreate} />
      <div className="Blog">
        {
          Blog.map((blog) => {
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
    </>
  )
}

export default App
