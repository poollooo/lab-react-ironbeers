import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SingleApartmentPage() {
    const [beers, setBeers] = useState([])

    const { id } = useParams()

    useEffect(() => {
        axios
            .get(`https://ironbnb-m3.herokuapp.com/apartments/${id}`)
            .then((response) => {
                console.log('response.data', response.data)
                setBeers(response.data)
            })
    }, [id])

    return (
        <div>
            <h3>Single beers page</h3>
            <ApartmentCard beers={beers} />
        </div>
    )
}

export default SingleApartmentPage