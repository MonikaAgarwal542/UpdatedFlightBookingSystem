import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import './FlightList.css'

import { useNavigate } from 'react-router-dom'

import NewNav2 from './NewNav2';
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


  const handleClick = (id, e) => {

    e.preventDefault();
    axios.get(`http://localhost:9095/flightslist/${id}`).then(
      res => {

        navigate(`/ticketbooking?flightNumber=${res.data.flightNumber}&flightName=${res.data.flightName}&source=${res.data.source}&destination=${res.data.destination}&date=${res.data.date}&price=${res.data.price}&departureDate=${res.data.departureDate}&arrivalTime=${res.data.arrivalTime}&departureTime=${res.data.departureTime}`);

      })



  }



  return (<>

    <NewNav2 /><br /><br />

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
              <td><button className="remove" onClick={(e) => handleClick(a.id, e)}>Book Now</button></td></tr>)}
        </tbody>

      </table>

    }


  </>
  );
}


