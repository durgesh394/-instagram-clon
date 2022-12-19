import React, { useContext, useState } from 'react'
import { ContextProvider } from '../Global/Context'
const Model = () => {
  const { model, CloseModel, Register, Login } = useContext(ContextProvider);
  const [state, setState] = useState(false)

  //For New Account Create
  const [singup, setSignup] = useState({
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
  })

  //for login
  const [login, setlogin] = useState({
    username: '',
    password: '',
  })

  //for toggle login & sign Up
  const FormToggle = () => {
    setState(!state);
  }

  const CloseForm = e => {
    let className = e.target.getAttribute('class');
    if (className == 'model') {
      CloseModel();
    }
  }

  const SignUpHandler = e => {
    e.preventDefault()
    Register(singup);

  }
  const LoginHandler = e => {
    e.preventDefault();
    Login(login)

  }
  const LoginChangeHandler = e => {
    setlogin({ ...login, [e.target.name]: e.target.value })

  }
  const ChangeHandler = e => {
    setSignup({ ...singup, [e.target.name]: e.target.value })

  }
  return (
    <>
      {model ? <div className="model_container" onClick={CloseForm}>
        <div className="model">
          <div className="model_wrapper">


            <div className="login-logo">
              <img src="../images/logo.png" alt="" className='login-logo-img' />
            </div>



            <div className="login_details">
              {
                state ? <>
                  <form action="" onSubmit={LoginHandler}>

                    <div className="login-user-container">
                      <input
                        type="text"
                        name='username'
                        placeholder='Phone Number , username or email addresss'
                        required
                        value={login.username}
                        onChange={LoginChangeHandler}
                      />
                    </div>

                    <div className="login-user-password">
                      <input
                        type="password"
                        name='password'
                        placeholder='Password'
                        required
                        value={login.password}
                        onChange={LoginChangeHandler}
                      />
                    </div>

                    <div className="login-btn">
                      <input
                        type="submit"
                        value="Log In"
                        id='login' />
                    </div>
                  </form>
                </> :

                  <>
                    <form action="" onSubmit={SignUpHandler}>

                      <div className="login-user-container">
                        <input
                          type="text"
                          name='username'
                          placeholder='Email address'
                          required
                          value={singup.username}
                          onChange={ChangeHandler}
                        />
                      </div>

                      <div className="login-user-container">
                        <input
                          type="text"
                          name='name'
                          placeholder='Full Name'
                          required
                          value={singup.name}
                          onChange={ChangeHandler}
                        />
                      </div>

                      <div className="login-user-password">
                        <input
                          type="password"
                          name='password'
                          placeholder='Password'
                          required
                          value={singup.password}
                          onChange={ChangeHandler}
                        />

                      </div>

                      <div className="login-user-password">
                        <input
                          type="password"
                          name='confirmPassword'
                          placeholder='Confirm Password'
                          required
                          value={singup.confirmPassword}
                          onChange={ChangeHandler}
                        />

                      </div>

                      <div className="login-btn">
                        <input type="submit" value="Sign Up" id='login' />
                      </div>

                    </form>
                  </>

              }
              {/* <div className="or">
                   <div className='or_border'></div> <span style={{color:"#ccc"}}>OR</span> <div className='or_border'></div>
                 </div> */}
              <div className="signUp_form">
                {state ? <p>Don't Have a Account ? <span onClick={() => { FormToggle() }} className="signupBtn">Sign Up</span></p> : <p>Already Have a Account ? <span onClick={() => { FormToggle() }} className="signupBtn">Log In</span></p>}
              </div>
            </div>


          </div>
        </div>
      </div> : null}
    </>
  )
}

export default Model
