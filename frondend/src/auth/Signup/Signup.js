import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup =({ name, email, password }) =>{
 const navigate = useNavigate();

  // State for form data and error message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Create an object containing all user data
      const userData = {
      name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      // Send the signup request to the server with all user data
      const response = await axios.post('http://localhost:8000/api/signup', userData);


      console.log(response.data);
      setLoading(false);

      if (response.data.message === 'User registered successfully') {
        toast.success('User registered successfully!!');
        navigate('/signin');
      } else if (response.data.message === 'User already exists') {
        setError('User with this email already exists.');
        toast.error('User with this email already exists');
      }
    } catch (error) {
      setLoading(false);
      console.error('Signup failed:', error.data);
      toast.error('Sign-up failed. Please try again.');
      setError('Sign-up failed. Please try again.');
    }
  };


    return (
        <>
            {/* <Header /> */}
            <div className="hero bg-base-250 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form className="card-body">
                    <div className="form-control  text-center"> 
                    <h className="text-2xl font-bold">Sign Up</h>
                    <h className="text-1xl font-bold">Create Bookshelf Account </h>
                      <label className="label">
                        <span className="label-text">Full Name</span>
                        </label>
                        <input type="name" id="name" name='name' placeholder="Full Name" className="input input-bordered" required 
                        onChange={handleChange}
                        
                        />
                    
                        <label className="label">
                        <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="sichanbookshelf@gmail.com" 
                        className="input input-bordered" required 
                        id='email' name='email'
                        onChange={handleChange}

                        />
                      </div>
                        <div className="form-control">
                          <label className="label">
                          <span className="label-text">Password</span>
                          </label>
                            <input id="password" name='password' type="password" placeholder="Password" className="input input-bordered" required
                            onChange={handleChange}/>
                        </div>
                      
                        <div className="form-control mt-6">
                        <button className="btn btn-primary"
                        type="submit"
                        onClick={handleSubmit}
                        >Sign Up</button>
                    </div>
                  </form>
                </div>
                <div className="text-left ">
                  <h1 className="text-4xl font-bold">Study Smart</h1>
                  <p className="py-12">
                    <b>Read anytime, anywhere.</b>
                  </p>
                </div>

              </div>
            </div>
        </>
      );
}
export default Signup;