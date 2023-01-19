import React, { useState } from 'react'
import { Button, Card, ListGroup, Form, Modal } from 'react-bootstrap';

const Edit = (props) => {

    // let emptyBlog = { date: '', name: '', location: '', topic: '', text: '' }


    const [blog, setBlog] = useState({ ...props.blog })

    const handleChange = (event) => {
        setBlog({ ...blog, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleUpdate(blog)
    }

    return (
        <>
     

            <details>
                <summary>Edit Blog Entry</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Date: </label>
                    <input
                        type="text"
                        name="date"
                        value={blog.date}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label htmlFor="name">Event Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={blog.name}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label htmlFor="name">Event Location: </label>
                    <input
                        type="text"
                        name="name"
                        value={blog.location}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label htmlFor="topic">Topic: </label>
                    <input
                        type="text"
                        name="topic"
                        value={blog.topic}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <label htmlFor="text">Text: </label>
                    <input
                        type="text"
                        name="text"
                        value={blog.text}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </details>
        </>
    )
}

export default Edit
