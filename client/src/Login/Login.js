
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

  const sign_out = (e) => {
    auth.sign_out(
      emailRef.current
    )
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
   <div className="login_screen">
   
    <div className="loginscreen_background">
      <img
      className='loginScreen_logo'
      src="" alt="" />
    
      <a href='http://localhost:4000/signUp'>   
      <button className='loginScreen_button' >Sign Up</button>
      </a>
      <div className="loginScreeen_gradient">
      </div>
    </div>
        <div className="loginScreen__body">
          <>   
            <h1>Unlimited films, TV programmes and 
          more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          </>
          <h3> Ready to watch? Enter your email to create or retart your membership.</h3>
          <div className="loginScreen__input">
            <form>
              <input type="email" placeholder='Email Address' ref={emailRef}/>
              <input type= "password" placeholder='password' ref={passwordRef}/>
              <button className='loginScreen_get' onClick={sign_in}> Get Started</button>
            </form>
          </div>
      </div>
   </div>

)} 
  

  

export default Login;
