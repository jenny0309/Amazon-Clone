import React from 'react'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/c/AmazonStores/A2EUQ1WTGCTBG2/48552d8626f0b16e04ff6c1a67e035ce.w3000.h650._CR0%2C0%2C3000%2C650_SX1500_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2 className="checkout__empty">Your Shopping Basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* List out all of the Checkout Products */}
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
