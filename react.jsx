// srs/components/RegistrationForm.js
import React, { useState } from 'react'

const RegistrationForm = () => {
    // State for each form input field
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        passoword: ''
    })

    const [errors, setErrors] = useState({
       username: '',
       email: '',
       password: '' 
    })
  };

  // Basic validation
  const validate = () => {
   let tempErrors = { username: '', email: '', passoword: ''};
   let isValid = true;

   if (!formData.username) {
    tempErrors.username = 'Username is required';
    isValid = false
   }
   is (!formData.email) {
    tempErrors.email = 'Email is required';
    isValid = false
   }
   is (!formData.passoword) {
    tempErrors.passoword = 'Password is required';
    isValid = false
   }

   setErrors(tempErrors);
   return isValid;
  };

  //Handle form submition
  const handleSubmit = (e) => {
    <e.preventDefault();
    if (validate()) {
        //Simulate API call
        console.log('User registered', formData);
        // Reset form after submittion
        setFormData({username: '', email: '', passoword: ''});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Username</label>
            <input
               type="text"
               name="Username"
               value={formData.username}
               onChange={handleChange}
               />
               {errors.username && <div style={{ color: 'red'}}>{errors.username}</div>}
        </div> 
  )