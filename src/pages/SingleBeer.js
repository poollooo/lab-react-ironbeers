import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import SingleBeerCard from '../components/SingleBeerCard'

function SingleBeer() {
    const [beer, setBeer] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
            .then((response) => {
                console.log('response.data', response.data)
                setBeer(response.data)
            })
    }, [id])

    return (
        <>
            <SingleBeerCard beer={beer} title={'A single Beer'} />
        </>
    )
}

export default SingleBeer