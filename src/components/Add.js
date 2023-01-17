import React, { useState, useEffect } from 'react'

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Date: </label>
                <input type="text" name="date" value={blog.date} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="name">Event Name: </label>
                <input type="text" name="name" value={blog.name} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="location"> Event Location: </label>
                <input type="text" name="location" value={blog.location} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="topic"> Topic: </label>
                <input type="text" name="topic" value={blog.topic} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="text"> Text: </label>
                <input type="text" name="text" value={blog.text} onChange={handleChange} />
                <br />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Add