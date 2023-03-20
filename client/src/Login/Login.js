
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const emailRef = useRef(null)
  const passwordRef = useRef(null)


  const sign_in = (e) => {
    e.preventDefault() 
    auth.signInWithEmailAndPassword(
  emailRef.current.value,
  passwordRef.current.value,
    ).then((authUser) => {
      navigate('/home')
    }).catch((error) => 
    alert(error.message))
  }

  // const [user, setCurrentUser] = useState(null)
  // const updateUser = (user => setCurrentUser(user))

  // const [loginData, setLoginData] = useState({
  //   email: '', 
  //   password: '',
  // })

  // let navigate = useNavigate()

  // function handleChange(e){
  //   setLoginData({
  //     ...loginData,[e.target.name]: e.target.value
  //   });

    // function handleSubmit (e) {
    //   e.preventDefault();
    //   fetch(`/login`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': "application/json",
    //     },
    //     body: JSON.stringify(loginData),
    //   }).then((res) => {
    //     if(res.ok){
    //       res.json().then((user) => {
    //         updateUser(user)
    //         navigate('/home')
    //       })
    //     }
    //   })
    // }};
  
  return (
   
  <form>  
      <h1 className='out'>Login</h1>
      <img src="https://reactjsexample.com/content/images/2021/07/Fakeflix.png" 
         alt="Neflix Logo" 
          className="nav_logo"/>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <a href='http://localhost:4000/signUp'> 
      <h1 className="header_signup" >Join FakeFlix!</h1>
      </a>
      {/* <h1 className="login_signup">Log In </h1> */}
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='title_login' >Unlimited films, TV programmes and
       more.</h1>
      <h1 className='out'>Login</h1>

     
      <div className="form_signup">
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
 <button type='submit' className='button' onClick={sign_in} > Log In </button>
 </div>

      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      ;<h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1> 
      <h1 className='out'>Login</h1>
      <h1 className='out'>Login</h1>
   
      </form>
)} 
  

  

export default Login;
