import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        // Add item to basket...
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>CDN$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        // create empty array with size of rating to show stars as many as the size
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span role="img" aria-label="star">⭐</span>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
