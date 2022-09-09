// src/pages/AllBeers.js

import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios
import BeerCard from "../components/BeerCard";

function AllBeers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {                                // <== ADD THE EFFECT
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then((response) => {
                console.log('response.data', response.data);
                setBeers(response.data)
            });

    }, []);
    // console.log('beers are : ', beers);


    return (
        <div>
            <h1>List of beers</h1>

            {beers.map((beer) => (
                <BeerCard beer={beer} />
            ))
            }
        </div>
    );
}

export default AllBeers;
