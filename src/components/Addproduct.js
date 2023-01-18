import React, { useState, useEffect } from 'react'

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
            <form onSubmit={handleSubmitProduct}>

                <label htmlFor="name">Item: </label>
                <input type="text" name="name" value={product.name} onChange={handleChangeProduct} />
                <br />
                <br />
                <label htmlFor="description"> Description: </label>
                <input type="text" name="description" value={product.description} onChange={handleChangeProduct} />
                <br />
                <br />
                <label htmlFor="price"> Price $: </label>
                <input type="text" name="price" value={product.price} onChange={handleChangeProduct} />
                <br />
                <br />
                <label htmlFor="image"> Image: </label>
                <input type="text" name="image" value={product.image_link} onChange={handleChangeProduct} />
                <br />
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default Addproduct