import { PanoramaHorizontalTwoTone } from "@mui/icons-material";
import React from "react";

const validation = (values) => {
    let errors = {};
    if (!values.firstName) {
        errors.firstName = "firstName is required."
    } else if (!/[a-zA-Z]/.test(values.firstName)) {
        errors.firstName = "FirstName is invalid."
    }
    if (!values.lastName) {
        errors.lastName = "LastName is required."
    } else if (!/[a-zA-Z]/.test(values.lastName)) {
        errors.lastName = "LastName is invalid."
    }
    if (!values.email) {
        errors.email = "Email is required."
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid."
    }
    if (!/.{8}/.test(values.password)) {
        errors.password = "Password should have atleast 8 characters";
    }


    return errors;
};

export default validation;
