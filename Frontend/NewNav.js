import React from 'react'
import './NewNavStyles.css'
import { Link } from 'react-router-dom'
export default function NewNav() {
    return (
        <header>
            <nav class="navbarDashboard2">
                <ul>
                    <Link to='/home' ><li>Home</li></Link>
                    <Link to='/AboutUs' ><li>About</li></Link>
                    <Link to='/FAQ'><li>FAQ</li></Link>
                    <Link to='/login' ><li>SignUp/Login</li></Link>


                </ul>
            </nav>
        </header>
    );
}
