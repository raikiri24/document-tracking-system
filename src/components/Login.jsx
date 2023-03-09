'use strict';
import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useNavigate, Outlet } from 'react-router-dom';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  console.log(loggedIn);
  useEffect(() => {
    loggedIn ? navigate('/dashboard') : <Outlet />;
  }, [loggedIn]);
  const responseMessage = (response) => {
    console.log('SUCCESS', response);
    const credential = jwtDecode(response.credential);
    const { email, email_verified, name, picture, given_name } = credential;
    localStorage.setItem(
      'credential',
      JSON.stringify({ email, email_verified, name, picture, given_name })
    );
    setLoggedIn(true);
  };
  const errorMessage = (error) => {
    console.log('ERROR', error);
  };
  return (
    <div>
      <h2>React Google Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};

export default Login;
