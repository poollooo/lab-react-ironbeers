import React from 'react'
import beerImage from "../assets/beers.png"
import newBeerImage from "../assets/new-beer.png"
import randomBeerImage from "../assets/random-beer.png"

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <img src={beerImage} alt="beer" />
                <h2>All Beers</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl eget aliquam tincidunt, nunc nisl
                    tincidunt nisl, nec aliquam nisl nisl sit amet lorem.
                </p>
            </div>
            <div>
                <img src={randomBeerImage} alt="randomBeerImage" />
                <h2>Random Beers</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl eget aliquam tincidunt, nunc nisl
                    tincidunt nisl, nec aliquam nisl nisl sit amet lorem.
                </p>
            </div>
            <div>
                <img src={newBeerImage} alt="newBeerImage" />
                <h2>New beers</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam auctor, nisl eget aliquam tincidunt, nunc nisl
                    tincidunt nisl, nec aliquam nisl nisl sit amet lorem.
                </p>
            </div>
        </div>
    )
}

export default HomePage