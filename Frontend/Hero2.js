import React from 'react'
import './HeroStyles.css'
import Video from './abc.mp4'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Hero2() {
    const sources = ['New Delhi', 'Bangalore', 'Hyderabad', 'Goa', 'Kerela', 'Mumbai'];
    const destinations = ['Bangalore', 'Hyderabad', 'Goa', 'Kerela', 'Mumbai', 'New Delhi'];
    const [formdata, setFormData] = useState({
        source: sources[0],
        destination: destinations[0],
        date: "",

    })

    const shouldDisable = () => {
        const { source, destination, date } = formdata;
        return !source || !destination || !date;
    }

    const handleChange = (event) => {
        //event.target.name, event.target.value
        const { name, value } = event.target;
        const destinationList = document.getElementById("destinationList")
        const destinationValue = name === 'destination' ? value : formdata.destination;
        const updatedformdata = {
            ...formdata,
            [name]: value,
            destination: name === 'source' ? undefined : destinationValue
        };

        setFormData(updatedformdata);
        if (name === 'source') destinationList.selectedIndex = -1;


    }

    const prevent = (e) => {
        if (shouldDisable()) e.preventDefault();
    }

    const url = `/searchflight?source=${formdata.source}&destination=${formdata.destination}&date=${formdata.date}`;
    return (
        <>
            <div className='hero'>
                <video autoPlay loop muted id='video' data-testid="videoid">
                    <source src={Video} type='video/mp4' />
                </video>

                <div className="content">


                    <div className="container">
                        <form>
                            <div className="input-wrap">
                                <label>Source</label>
                                <select className='hero-select' defaultValue={formdata.source} onChange={handleChange} name="source" >
                                    {sources.map(source => <option value={source} key={source}>{source}</option>)}
                                </select>
                            </div>
                            <div className="input-wrap">
                                <label>Destination</label>
                                <select className='hero-select' value={formdata.destination} onChange={handleChange} name="destination" id="destinationList">
                                    {destinations.map(destination => <option value={destination} key={destination} disabled={destination === formdata.source} >{destination}</option>)}
                                </select>
                            </div>
                            <div className="date">
                                <div className="input-wrap">
                                    <label>Date</label>
                                    <input className='hero-select' type="text" name="date" placeholder=' dd /mm/yyyy' onChange={handleChange} />
                                </div>
                            </div>

                            <Link to={url} onClick={prevent}>
                                <button className="butt hero-btn" >Search Flight</button></Link>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Hero2