import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MDUxZTAzODMt/MDUxZTAzODMt-ZDgyMzc5NzIt-w1500._CB418673800_.jpg"
                alt=""
            />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product
                    id="1"
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con"
                    price={399.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61JnrafZ7zL._AC_SL1457_.jpg"
                />
                <Product
                    id="2"
                    title="Nintendo Switch Pro Controller"
                    price={89.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61drpi3cYUL._AC_SL1258_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="3"
                    title="Animal Crossing: New Horizons"
                    price={78.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81UfEdvf2kL._AC_SL1500_.jpg"
                />
                <Product
                    id="4"
                    title="Mario Kart 8 Deluxe - Switch"
                    price={79.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._AC_SL1500_.jpg"
                />
                <Product
                    id="5"
                    title="Ring Fit Adventure - Nintendo Switch"
                    price={129.97}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81V7L6auixL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="6"
                    title="PlayStation 5 Digital Edition"
                    price={1359.98}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61JbCra%2B7GL._AC_SL1500_.jpg"
                />
            </div>
            {/* Product */}
        </div>
    )
}

export default Home
