import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const backEndUrl = "https://ih-beers-api2.herokuapp.com/beers/new"

function NewBeers() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewers_tips, setBrewers_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState('')
    const [contributed_by, setContributed_by] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        // Create the body for the POST request
        const body = { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by }

        axios.post(backEndUrl, body).then((response) => {
            // Reset the state
            setName('')
            setTagline('')
            setDescription('')
            setFirst_brewed('')
            setBrewers_tips('')
            setAttenuation_level('')
            setContributed_by('')

            // Navigate to the `/` page while handling post request
            navigate('/')
        })
    }

    return (
        <div className="NewBeers">
            <h3>Add New Beer</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <label>Tagline</label>
                <input
                    type="text"
                    name="tagline"
                    onChange={(e) => setTagline(e.target.value)}
                    value={tagline}
                />
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                />
                <label>First Brewed</label>
                <input
                    type="text"
                    name="first_brewed"
                    onChange={(e) => setFirst_brewed(e.target.value)}
                    value={first_brewed}
                />
                <label>Brewers Tips</label>
                <input
                    type="text"
                    name="brewers_tips"
                    onChange={(e) => setBrewers_tips(e.target.value)}
                    value={brewers_tips}
                />
                <label>Attenuation Level</label>
                <input
                    type="number"
                    name="attenuation_level"
                    onChange={(e) => setAttenuation_level(e.target.value)}
                    value={attenuation_level}
                />
                <label>Contributed By</label>
                <input
                    type="text"
                    name="contributed_by"
                    onChange={(e) => setContributed_by(e.target.value)}
                    value={contributed_by}
                />
                <button type="submit">Add New Beer</button>
            </form>
        </div>
    )
}

export default NewBeers
