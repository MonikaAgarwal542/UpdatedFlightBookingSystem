import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import AdminDashboard from './AdminDashboard'
import './FlightList.css'
export default function FlightsList() {
    const [flightList, setFlightList] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:9095/flightslist').then(a => {
            setFlightList(a.data);
        })
    }, [])
    const handleDeleteClick = (id, e) => {
        // console.log(id);

        e.preventDefault();
        axios.delete(`http://localhost:9095/deleteflights/${id}`).then(
            res => {
                //console.log(res);
                const newFlightList = [...flightList];
                const newid = flightList.findIndex((flightid) => flightid.id === id);
                newFlightList.splice(newid, 1);
                setFlightList(newFlightList);
            })


    }



    return (
        <>
            <AdminDashboard />
            <div><h3 style={{ color: 'black', textAlign: 'center', fontSize: 50 }}>List Of Flights</h3></div><br /><br />

            <table className='flight' border='1' rules="rows">

                <thead className='abc' >
                    <tr >
                        <th>FlightId</th>
                        <th>FlightNo</th>
                        <th>FlightName</th>
                        <th>From</th>
                        <th>To</th>
                        <th>ArrivalDate</th>
                        <th>DepartureDate</th>
                        <th>ArrivalTime</th>
                        <th>DepartureTime</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody className='a1'>
                    {flightList.map(a =>
                        <tr key={a.id} className="bc">
                            <td>{a.id}</td>
                            <td>{a.flightNumber}</td>
                            <td>{a.flightName}</td>
                            <td>{a.source}</td>

                            <td>{a.destination}</td>
                            <td>{a.date}</td>
                            <td>{a.departureDate}</td>
                            <td>{a.arrivalTime}</td>
                            <td>{a.departureTime}</td>
                            <td>₹ {a.price}</td>
                            <td><button className="remove" onClick={(e) => handleDeleteClick(a.id, e)}>Remove Flight</button></td></tr>)}
                </tbody>

            </table>
            <br /><br /><br />










        </>

    )
}
