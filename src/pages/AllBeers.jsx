// src/pages/AllBeers.js

import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios

function AllBeers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {                                // <== ADD THE EFFECT
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log('response.data', response.data);
                setBeers(response.data)
            });

    }, []);  // <- [] means: Run the effect only once, after initial render
    // console.log('beers are : ', beers);


    return (
        <div>
            <h1>List of beers</h1>

            {/*      ADD     */}
            {beers.map((beer) => (
                <div key={beer._id} style={{ "display": "flex", "flex-direction": "row", "margin-bottom": "50px", "justify-content": "center", "align-items": "center", "padding-left": "60px", "border-bottom": "solid", "padding-bottom": "10px" }}>
                    <img src={beer.image_url} alt="beer" style={{ "height": "140px" }} />
                    <div style={{ "display": "flex", "flex-direction": "column", "margin-left": "20px" }}>
                        <h3>{beer.name}</h3>
                        <div>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                        </div>
                    </div>
                </div>
            ))
            }

        </div >
    );
}

export default AllBeers;
