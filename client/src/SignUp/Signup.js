import React, { useRef, useState } from 'react'
import {auth} from "../firebase"

import './Signup.css'

function Signup() {

const emailRef = useRef(null)
const passwordRef = useRef(null)
const usernameRef = useState(null)

const sign_in = (e) => {
    e.preventDefault()

  auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
    ).then((authUser) => {
  console.log(authUser)

    }).catch((error) => {
       alert(error.message)
    })
}


    // const [user, setCurrentUser] = useState("")
    // const [formData, setFormData] = useState({
    //     username:"",
    //     email: "",
    //     password:"", 
    // });


     
    // function handleChange(e){
    //     setFormData({
    //         ...formData,
    //         [e.target.name] : e.target.value,
        
    //     });
    // }

    // function handleSubmit(e){
    //     e.preventDefault()
    //     const newUser = {...formData}
      
    //     fetch(`/users`,{
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newUser)
    //     }) 
    //     .then((res) => {
    //         if(res.ok) {
    //             res.json().then((user) => {
    //                 setCurrentUser(user);
    //             });
            
    //         } else{
    //             res.json().then((errors) => {
    //                 console.log(errors);
    //             });
    //         }
    //     })
   
    //     .catch((err) => console.log(err));
    // }

  return (
    <> 
    
    <form> 

      <h1 className='out' >SignUp</h1>
      <h1 className='out'>SignUp</h1> 
    
        <img src="https://reactjsexample.com/content/images/2021/07/Fakeflix.png" 
         alt="Neflix Logo" 
          className="nav_logo"/>
        
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>

    
      {/* <h1 className='header_signup' >Join  Fakeflix  </h1> */}

      <div className="form_signup">
      <label >Username</label>
      <input
       type="text" 
       placeholder='username'
        name='username'
        id='username'
        ref={usernameRef}
        // onChange={handleChange}
        />
 <br></br>
      <label className='label' >Email</label>
      <input
       type="email" 
       placeholder='Email'
        name='email'
        id='email'
        ref={emailRef}
        // onChange={handleChange}
        />
<br></br>

      <label className='label'>Password</label>
      <input
       type="password" 
       id='password'
       placeholder='Password'
       name='password' 
       ref={passwordRef}
        // onChange={handleChange}
        />
 <button type='submit' className='button'  onClick={sign_in} > Sign Up </button>

      </div>
      </form> 
     
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      <h1 className='out'>SignUp</h1>
      </>
  )
}

export default Signup
