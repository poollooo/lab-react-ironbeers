// src/pages/RandomBeers.js

import { useState, useEffect } from "react";     // <== IMPORT useEffect
import axios from "axios";                       // <== IMPORT axios
import SingleBeerCard from "../components/SingleBeerCard";

function RandomBeers() {
    const [beer, setBeer] = useState([]);

    useEffect(() => {                                // <== ADD THE EFFECT
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                console.log('response.data', response.data);
                setBeer(response.data)
            });

    }, []);
    // console.log('beer are : ', beer);


    return (
        <>
            <SingleBeerCard beer={beer} title={'A Random beer'} />
        </>
    );
}

export default RandomBeers;
