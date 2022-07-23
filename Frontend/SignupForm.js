import React, { useEffect, useState } from 'react';
import validation from './Validation';
import SignupFormSuccess from "./SignupFormSuccess";
import "./Signup.css";
import axios from 'axios';
export default function SignupForm(props) {
    const { submitForm } = props;

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [isRegistered, setRegistered] = useState(false);

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
    const postData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9095/addusers', values).then(
            res => console.log("data is : ", res)
        ).catch(err => console.log(err))
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        postData(event);
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && dataIsCorrect) {
            setRegistered(true);
        }
    }, [errors]);

    if (isRegistered) {
        return <SignupFormSuccess />
    }

    return (
        <div className="c">
            <div className="app-wrapper">
                <div>
                    <h2 className="t">Create Account</h2>
                </div>

                <form className="form-wrapper">
                    <div className="name">
                        <label className='label'>First Name</label>
                        <input className='input' type="text" name="firstName" value={values.firstName} onChange={handleChange} />
                        {errors.firstName && <p className='error'>{errors.firstName}</p>}
                    </div>
                    <div className="name">
                        <label className='label'>Last Name</label>
                        <input className='input' type="text" name="lastName" value={values.lastName} onChange={handleChange} />
                        {errors.lastName && <p className='error'>{errors.lastName}</p>}
                    </div>

                    <div className="email">
                        <label className='label'>Email</label>
                        <input className='input' type="email" name="email" value={values.email} onChange={handleChange} />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>
                    <div className="password">
                        <label className='label'>Password</label>
                        <input className='input' type="password" name="password" value={values.password} onChange={handleChange} />
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>
                    <div>
                        <button className='submit' onClick={handleFormSubmit} >Sign Up</button>
                    </div>
                </form>

            </div>

        </div>
    )

}