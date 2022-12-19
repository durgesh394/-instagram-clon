import React, { useContext } from 'react'
import { ContextProvider } from '../Global/Context';
const Navbar = () => {
const {model , OpenModel ,logout , currentuser} = useContext(ContextProvider);

    const OpenForms = () =>{
      OpenModel();
    }

    const LogoutHandler =() =>{
      logout();
    }
  return (
    <div className='navbar_container'>
        <div className="navbar_logo">
            <img src="../images/logo.png" alt=""  className='navbar_logo_img'/>
        </div>
        <div className="navbar_search">
               
                <span><i className="fa-solid fa-magnifying-glass"></i></span>
                <span> <input type="search" placeholder='Search' className='search'/></span>
               
        </div>
        <div className="navbar_icons">
                <span className='nav-icon'><i class="fa-regular fa-heart"></i></span>
                <span  className='nav-icon'><i class="fa-regular fa-paper-plane"></i></span>
                {currentuser ? <span onClick={()=>{LogoutHandler()}}>{currentuser}/Logout</span> : <span onClick={()=>{OpenForms()}}>Login/Register</span>}

        </div>
    </div>
  )
}

export default Navbar