import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './FlightList.css'

import { useNavigate, Link } from 'react-router-dom'

import NewNav from './NewNav';
export default function SearchFlight(props) {
    const navigate = useNavigate();
    const [data, setData] = useState([]);



    const getSearchParams = () => {
        const values = {}
        const search = unescape(window.location.search.replace("?", ""));
        search.split("&").forEach(pair => {
            const splited = pair.split("=");
            return values[splited[0]] = splited[1];
        })
        return values;
    };

    const getFilteredData = (data, filters) => {
        return (data ?? []).filter(data => data.source === filters.source && data.destination === filters.destination && data.date === filters.date);
    }

    useEffect(() => {
        const params = getSearchParams();
        axios.get('http://localhost:9095/flightslist').then(({ data }) => {
            const filteredData = getFilteredData(data, params);
            setData(filteredData);

        }).catch(err => console.log(err))
    }, []
    )





    return (<>

        <NewNav /><br /><br />

        {data.length === 0 ? <h3 className='textCenter'>No flight found!!</h3> :

            <table className='flight' border='1' rules="rows">

                <thead className='abc' >
                    <tr >
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
                    {data.map(a =>
                        <tr key={a.id}>
                            <td>{a.flightNumber}</td>
                            <td>{a.flightName}</td>
                            <td>{a.source}</td>

                            <td>{a.destination}</td>
                            <td>{a.date}</td>
                            <td>{a.departureDate}</td>
                            <td>{a.arrivalTime}</td>
                            <td>{a.departureTime}</td>
                            <td>₹ {a.price}</td>
                            <td><Link to='/login'><button className="remove" >Book Now</button></Link></td></tr>)}
                </tbody>

            </table>

        }


    </>
    );
}


