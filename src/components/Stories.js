import React, { useContext, useState } from 'react'
import { ContextProvider } from '../Global/Context';

const Stories = () => {
    let storiesData = [
        { id: 1, img: "../images/Bill_gate.jpg", name: "Bill.gate33" },
        { id: 2, img: "../images/Ajay_devgan.jpg", name: "Ajay.dev394" },
        { id: 3, img: "../images/Elon_Musk.jpg", name: "elon32" },
        { id: 4, img: "../images/Sundar_pichai.jpg", name: "sundar.pi" },
        { id: 5, img: "../images/satya_nadela.jpg", name: "satya.ms" },
        { id: 6, img: "../images/salman_khan.jpg", name: "sallu55" },
        {id :7, img : "../images/sandeep.jpg" , name : "sandy833"},
        {id :8 , img : "../images/vikash.jpg" , name : "vikash1"}
    ];
    const [stories, setStories] = useState(storiesData);
    const {currentuser} = useContext(ContextProvider)

    return (
        <>{
            currentuser ? 
        <div className='storiesContainer'>
            {
                stories.map((data) => {
                    return (
                        <div className='storisWrapper'>
                            <div>
                                <div className='img'><img src={data.img} alt="" className='storiesimg' /></div><br />
                                <span className='storisname'>{data.name}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
:null} </> )
}

export default Stories 
