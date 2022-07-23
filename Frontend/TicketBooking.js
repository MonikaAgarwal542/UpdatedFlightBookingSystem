import React, { useEffect } from 'react'
import { useState } from 'react';
import './Ticket.css'
import NewNav2 from './NewNav2'
import { useNavigate } from 'react-router-dom';
export default function TicketBooking() {
    const navigate = useNavigate();
    const [people, setPeople] = useState(0);
    const [data, setData] = useState({});
    const getSearchParams = () => {
        const values = {}
        const search = unescape(window.location.search.replace("?", ""));
        search.split("&").forEach(pair => {
            const splited = pair.split("=");
            return values[splited[0]] = splited[1];
        })
        return values;
    };

    useEffect(() => {
        const params = getSearchParams();

        setData(params);
    }, []
    )
    /* const handleChange = (event) => {
         event.target.name = event.target.value;
         setPeople(event.target.value);
 
     }*/
    const handleOnClick = (e) => {
        e.preventDefault();
        // navigate(`/addperson?people=${people}`);
        navigate("/payment");
    }
    return (
        <div>
            <NewNav2 /><br />
            <div >
                <div> <h2 style={{ backgroundColor: 'lightgrey', textAlign: 'center' }}>Invoice</h2></div>
                <table className='tb-table'>
                    <div className='tb-div'>
                        <thead>
                            <tr><th colspan='2' >Flight Details</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Flight No:{data.flightNumber}</td>
                                <td> Flight Name:{data.flightName}</td>
                            </tr>
                            <tr>
                                <td>Arrival Date:{data.date} </td>
                                <td style={{ marginRight: "-42px" }}>Departure Date:{data.departureDate}</td>
                            </tr>
                            <tr>
                                <td>Source:{data.source} </td>
                                <td style={{ marginRight: "10px" }}>Destination:{data.destination}</td>

                            </tr>
                            <tr>
                                <td>Ticket Price:Rs.{data.price}</td>
                            </tr>
                            <tr style={{ justifyContent: "center" }}>
                                <td colspan='2'><button onClick={handleOnClick}>Confirm Ticket</button></td>
                            </tr>

                        </tbody>
                    </div>
                </table><br />


            </div > <br />




        </div >
    )
}
