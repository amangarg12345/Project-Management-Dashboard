import React from 'react'

const Validate = (email,password) => {

    const isMailValid = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isMailValid) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    return null;
  
}
export default Validate;