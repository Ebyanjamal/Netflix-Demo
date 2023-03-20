import React from 'react'
import "./Nav.css"


function Nav() {
  return (

    <div className='nav'>
      
    <a href='http://localhost:4000/home'> 
        <img src="https://reactjsexample.com/content/images/2021/07/Fakeflix.png" 
         alt="Neflix Logo" 
          className="nav_logo"/>
    </a>
       
     <a href='http://localhost:4000/user'> 
       <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="Neflix User Logo" className="user_logo" />
       </a>
       
    </div>
    
  )
}

export default Nav
