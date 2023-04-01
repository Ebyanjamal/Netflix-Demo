// import React, { useEffect } from "react";
// import { Form } from "react-router-dom";
import "./User.css";
import "../index.css";
import React from "react";
import Nav from "../Navbar/Nav";
// rials

function User({ user }) {

  return (
    <>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>

      <div className="profileScreen">
      <Nav />
      <div className="profilescreen_body">
     <h1>Edit Profile</h1>
     <div className="profileScreen_info">
      <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
         alt="" />
         <div className="profileScreen_details">
              <h2>{user.email}</h2>
              <div className="profileScreen_plans">
                <h3>Plans</h3>
                <a href="http://localhost:4000"> 
              <button className="profileScreen_signout"> Sign Out</button>
              </a>
                </div>
              </div>
            </div>
          </div>
       </div>
      <h1 className='out'>hello </h1>

      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      <h1 className='out'>hello </h1>
      <h2 className='out'>World</h2>
      </>
  );
}

export default User;
