import React from 'react'
import { Link } from 'react-router-dom'

const BeerCard = ({ beer }) => {
    return (
        <div key={beer._id} style={{ "display": "flex", "flex-direction": "row", "margin-bottom": "50px", "justify-content": "center", "align-items": "center", "padding-left": "60px", "border-bottom": "solid", "padding-bottom": "10px" }}>
            <Link to={beer._id}>
                <img src={beer.image_url} alt="beer" style={{ "height": "140px" }} />
            </Link>
            <div style={{ "display": "flex", "flex-direction": "column", "margin-left": "20px" }}>
                <Link to={beer._id}>
                    <h3>{beer.name}</h3>
                </Link>
                <div>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default BeerCard