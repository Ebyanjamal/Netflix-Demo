import React, { useState } from "react";
import "./App.css";
// import Row from "../Row/Row";
// import Banner from "../Banner/Banner";
// import requests from "../requests";
import Nav from "../Navbar/Nav";
import User from "../User/User";
import Home from "../Home/Home";
// import {BrowserRouter} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {HashLink as Link} from 'react-router-hash-link'
import { Outlet } from "react-router-dom";
import Signup from "../SignUp/Signup";
import Login from '../Login/Login'

function App() {
  // const [user, setUser] = useState(null);
  const NavLayout = () => (
    <>
      <Nav />
      <Home />
      <Outlet />
    </>
  );

  return (
    // <BrowserRouter>

    <div className="App">
      {/* {user ? <Nav /> : null} */}

      <Router>
        <Routes>
          <Route path="/Home" element={<NavLayout />} />
          <Route path="/user" element={<User />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </Router>
      {/* <User/> */}
    </div>
    //  </BrowserRouter>
  );
}

export default App;

/*isLargeRow has a default of true/*/

/* <User/> */

/* <Link to='#user'>User</Link> */
