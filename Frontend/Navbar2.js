import { useState } from 'react'
import './NavbarStyles.css'
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
//install mui components first for this file to run 
function Navbar2(props) {


    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2 >King Flyer</h2>
            </div>
            <ul className="nav-menu" >

                <Link to='/home2'><li>Home</li></Link>
                <Link to='/About'><li>About</li></Link>
                <Link to='/FAQ'><li>FAQ</li></Link>

                <Link to='/' ><li>My Account</li></Link>
                <Link to="/home"><li>LogOut</li></Link>

            </ul>




        </div>
    )
}



export default Navbar2