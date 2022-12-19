import React, { useState } from 'react'
import { useContext } from 'react';
import { ContextProvider } from '../Global/Context';

const Sidebar = () => {
    let storiesData = [
        { id: 1, img: "../images/Bill_gate.jpg", name: "Bill.gate33" },
        
        { id: 2, img: "../images/Elon_Musk.jpg", name: "elon32" },
        { id: 3, img: "../images/Sundar_pichai.jpg", name: "sundar.pi" },
        { id: 4, img: "../images/satya_nadela.jpg", name: "satya.ms" },
        
        { id: 5, img: "../images/sandeep.jpg", name: "sandy833" },
        { id: 6, img: "../images/vikash.jpg", name: "vikash1" }
    ];
    const [suggestion, setsuggestion] = useState(storiesData);
    const {currentuser} = useContext(ContextProvider);
    
    return (
        <>
        {
            currentuser ? 
        
        <div className='sidebar_container'>
            <div className="sidebarprofile">
                <div className="avator">{currentuser[0]}</div>
                <div className="sidebarprofilename">{currentuser}</div>
            </div>
            <div className='suggestion'>Suggestions for you</div>
        {
            suggestion.map((sidebar) => {
                return (
                    <>
                            <div className="side">
                            <div className="sidebarHeader">
                                <div className="profile"><img src={sidebar.img} alt="" className='sidebarImg' /></div>
                                <div className="sidebarHadername">{sidebar.name}</div>
                            </div>
                            <div className="sidebar_follow">Follow</div>
                            </div>
                    </>
                )
            })
        }
        
                        </div>
   :null }    </>

    )
}

export default Sidebar