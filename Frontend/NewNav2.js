import React from 'react'
import './NewNavStyles.css'
import { Link } from 'react-router-dom'
export default function NewNav2() {
    return (
        <header>
            <nav class="navbarDashboard2">
                <ul>

                    <Link to='/home2' ><li>Home</li></Link>
                    <Link to='/About' ><li>About</li></Link>
                    <Link to='/FAQ'><li>FAQ</li></Link>
                    <Link to='/' ><li>My Account</li></Link>
                    <Link to='/home' ><li>LogOut</li></Link>



                </ul>
            </nav>
        </header>
    );
}
