import React, { useEffect, useState } from 'react';
import AdminDashboard from './AdminDashboard';
import axios from 'axios';
import './AddFlightsFormStyles.css';
export default function AddFlightsForm() {
    const sources = ['New Delhi', 'Bangalore', 'Hyderabad', 'Goa', 'Kerela', 'Mumbai'];
    const destinations = ['Bangalore', 'Hyderabad', 'Goa', 'Kerela', 'Mumbai', 'New Delhi'];
    const [values, setValues] = useState({
        flightName: "",
        flightNumber: "",
        date: "",
        departureDate: "",
        arrivalTime: "",
        departureTime: "",
        price: '',
        source: "",
        destination: "",
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const postData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9095/addflights', values).then(
            res => console.log("data is : ", res)
        ).catch(err => console.log(err))
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();

        postData(event);
        alert("Flight added");

    };
    return (
        <div>
            <AdminDashboard />
            <div className='af-form-center'>
                <form className='af-form' border='6' style={{ textAlign: 'center' }}>
                    <tr>
                        <td><label>FlightName</label><br />
                            <input type="text" onChange={handleChange} name="flightName" value={values.flightName} required></input></td>&nbsp;&nbsp;
                        <td><label>FlightNumber</label><br />
                            <input type="text" onChange={handleChange} name="flightNumber" value={values.flightNumber} required></input></td>
                    </tr>
                    <tr>
                        <td>
                            <label>Source</label><br />
                            <select name="source" onChange={handleChange} value={values.source} required>
                                {sources.map(source => <option value={source}>{source}</option>)}
                            </select></td>&nbsp;&nbsp;
                        <td>&nbsp;&nbsp;
                            <label>Destination</label><br />
                            <select name="destination" onChange={handleChange} value={values.destination} required>
                                {destinations.map(destination => <option value={destination}>{destination}</option>)}
                            </select></td>
                    </tr>
                    <tr>
                        <td>
                            <label>Arrival Date</label><br />
                            <input type="text" onChange={handleChange} name="date" value={values.date} required placeholder="dd/mm/yyyy" />
                        </td>&nbsp;&nbsp;
                        <td>
                            <label>Departure Date</label><br />
                            <input type="text" onChange={handleChange} name="departureDate" value={values.departureDate} required placeholder="dd/mm/yyyy" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Arrival Time</label><br />
                            <input type="text" onChange={handleChange} name="arrivalTime" value={values.arrivalTime} required />
                        </td>&nbsp;&nbsp;
                        <td>
                            <label>Departure Time</label><br />
                            <input type="text" onChange={handleChange} name="departureTime" value={values.departureTime} required />
                        </td>
                    </tr>
                    <tr>
                        <td colspan='2'>
                            <label>Ticket Price</label><br />
                            <input type="number" onChange={handleChange} name="price" value={values.price} required />
                        </td>
                    </tr>
                    <tr><td colspan='2'><button onClick={handleFormSubmit} data-testid="btnVerify">Add</button></td></tr>
                </form>
            </div>
        </div>

    )
}

