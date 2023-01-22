import React, { useState } from 'react'

const Editproduct = (props) => {


    const [product, setProduct] = useState({ ...props.product })

    const handleChangeProduct = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    const handleSubmitProduct = (event) => {
        event.preventDefault();
        props.handleUpdateProduct(product)
    }

    return (
        <>
            <details>
                <summary>Edit Product Entry</summary>
                <form onSubmit={handleSubmitProduct}>
                    <label htmlFor="item">Item: </label>
                    <input
                        type="text"
                        name="item"
                        value={product.name}
                        onChange={handleChangeProduct}
                    />
                    <br />
                    <br />
                    <label htmlFor="description">Description: </label>
                    <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={handleChangeProduct}
                    />
                    <br />
                    <br />
                    <label htmlFor="price">Price $: </label>
                    <input
                        type="text"
                        name="price"
                        value={product.price}
                        onChange={handleChangeProduct}
                    />
                    <br />
                    <br />
                    <label htmlFor="item">Image: </label>
                    <input
                        type="text"
                        name="item"
                        value={product.image}
                        onChange={handleChangeProduct}
                    />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
            </details>
        </>
    )
}

export default Editproduct
