import React, { useEffect, useState } from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Context from "./Global/Context";
import Model from './components/Model';
import Stories from './components/Stories';
import Create from './components/Create';
import Post from './components/Post';
import Sidebar from './components/Sidebar';
const App = () => {
   return (
      <>
         <Context>
            <Navbar />
             <Sidebar />
            <Model />
            <Stories />
            <Create />
            <Post />
         </Context>
      </>
   )
}

export default App