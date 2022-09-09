import React from 'react'

const SingleBeerCard = ({ beer, title }) => {
    return (
        <>
            <h1>{title}</h1>
            <div>
                <div key={beer._id} style={{ "display": "flex", "flex-direction": "row", "margin-bottom": "50px", "justify-content": "center", "align-items": "center", "padding-left": "60px", "border-bottom": "solid", "padding-bottom": "10px" }}>
                    <img src={beer.image_url} alt="beer" style={{ "height": "140px" }} />
                    <div style={{ "display": "flex", "flex-direction": "column", "margin-left": "20px" }}>
                        <h3>{beer.name}</h3>
                        <div>
                            <p>{beer.tagline}</p>
                            <p>{beer.first_brewed}</p>
                            <p>{beer.attenuation_level}</p>
                            <p>{beer.description}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBeerCard