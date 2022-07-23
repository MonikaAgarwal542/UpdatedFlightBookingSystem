import * as React from 'react';


import './AdminDashboardStyles.css'
import { Link } from 'react-router-dom'


const AdminDashboard = () => {
    return (
        <header>
            <nav class="navbarDashboard">
                <ul>

                    <Link to='/FlightsList'><li>All Flights</li></Link>
                    <Link to='/addflights'><li>Add Flights</li></Link>
                    <Link to='/'><li>My Account</li></Link>
                    <Link to='/home'><li>LogOut</li></Link>

                </ul>
            </nav>
        </header>
    );
};
export default AdminDashboard;