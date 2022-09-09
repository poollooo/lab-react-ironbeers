import React from 'react'
import beerImage from "../assets/beers.png"

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <img src={beerImage} alt="beer" />
                <h2>All Beers</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        </div>
    )
}

export default HomePage