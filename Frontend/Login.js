import React, { useEffect, useState } from 'react';
import './LoginStyles.css'
import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'
export default function Login() {

    var x = 0;
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [userList, setuserList] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (values.email == "Admin@gmail.com" && values.password == 12345678) {
            navigate(`/adminDashboard`);
            //`/ticketbooking?flightNumber=${res.data.flightNumber}&flightName=${res.data.flightName}
        }
        else {

            {
                userList.map(a => {
                    // console.log(a);
                    if (values.email == a.email && values.password == a.password) {

                        x = x + 1;

                    }



                }

                )

            }

            if (x === 0) {

                alert("Account does not exist");

            }
            else { navigate("/MyPage"); }

        }
    };

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }


    useEffect(() => {

        axios.get('http://localhost:9095/userslist').then(a => {
            setuserList(a.data);
        })
    }, [])
    return (
        <div className='bg'>
            <div className="login-form-wrap">
                <h2 className='head'>Login</h2><br />
                <form className="login-form">
                    <p className='para'>
                        <label className='label2'>Email Address : </label>
                        <input type="email" className="email2" name="email" value={values.email} onChange={handleChange} required />
                    </p><br />
                    <p>
                        <label className='label2'>Password : </label>
                        <input type="password" className="password2" name="password" value={values.password} onChange={handleChange} required />
                    </p><br />
                    <p>

                        <button className='login2' onClick={handleFormSubmit} >Login</button>
                    </p><br />
                </form>
                <div className="create-account-wrap">
                    <p className='a'> Not a member?  <Link to='/signup' >Create Account</Link></p>
                </div>
            </div></div>
    )
}
