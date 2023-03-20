import React, { useState } from 'react'
import './Signup.css'

function Signup() {
    const [user, setCurrentUser] = useState("")
    const [formData, setFormData] = useState({
        username:"",
        email: "",
        password:"", 
    });


     
    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        
        });
    }

    function handleSubmit(e){
        e.preventDefault()
        const newUser = {...formData}
      
        fetch(`/users`,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        }) 
        .then((res) => {
            if(res.ok) {
                res.json().then((user) => {
                    setCurrentUser(user);
                });
            
            } else{
                res.json().then((errors) => {
                    console.log(errors);
                });
            }
        })
   
        .catch((err) => console.log(err));
    }

  return (
    <> 
    
    <form onSubmit={handleSubmit}> 

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
        value={formData.username}
        onChange={handleChange}
        />
 <br></br>
      <label className='label' >Email</label>
      <input
       type="email" 
       placeholder='Email'
        name='email'
        id='email'
        value={formData.email}
        onChange={handleChange}
        />
<br></br>

      <label className='label'>Password</label>
      <input
       type="password" 
       id='password'
       placeholder='Password'
       name='password' 
        value={formData.password}
        onChange={handleChange}
        />
 <button type='submit' className='button' > Sign Up </button>

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
