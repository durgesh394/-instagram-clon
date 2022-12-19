import React, { useEffect } from 'react'
import { useState, createContext } from 'react'
import {doc, getDocs} from 'firebase/firestore';
import { auth, db, storage } from "../firebase";
import { getAuth, signOut, updateProfile } from "firebase/auth"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { addDoc, collection } from 'firebase/firestore';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { date } from 'yup';
import { async } from '@firebase/util';

export const ContextProvider = createContext();
const Context = (props) => {
  const [model, setmodel] = useState(false);
  const [currentuser , setcurrentuser] = useState(null);
  const [post , setpost] = useState([]);
  console.log(post)

  const OpenModel = () => {
    setmodel(true);
  }
  const CloseModel = () => {
    setmodel(false);
  }

  const Register = async (user) => {
    try {
      const  response  = await createUserWithEmailAndPassword(auth, user.username, user.password);
      await updateProfile(response.user,{
        displayName : user.name,
      })
      setmodel(false);
      console.log("responce", response)
    } catch (error) {
      console.log(error)
    }
  }


  const Login = async (user) => {
    try {
      const res = await signInWithEmailAndPassword(auth, user.username, user.password);
      console.log(res);
      setmodel(false)
      
    } catch (error) {
      console.log(error)
    }
  }

  const logout = (user) =>{
      signOut(auth)
      .then((auth)=>{
        setcurrentuser(false);
      }).then((err)=>{
        console.log(err)
      })
  }

  const Create = (user) => {

    const { title, image } = user;


    const collectionRef = collection(db, "post");

    const imageRef = ref(storage, `images/${image.name}`);
    uploadBytes(imageRef, image).then(() => {

      getDownloadURL(imageRef).then((url) => {

        addDoc(collectionRef, {
          title: title,
          name: currentuser,
          image: url,
        }).then((e) => {
          console.log(e);
        }).then((err) => {
          console.log(err)
        })
      })
    })

  }

  const postsColloectioRef = collection(db, "post");
      useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
          setcurrentuser(user.displayName);
        })


        let getpost = async ()=>{
          let data = await getDocs(postsColloectioRef)
          setpost(data.docs.map((doc)=>({...doc.data(),id : doc.id})))
      }
      getpost();
      },[currentuser])

  return (
    <ContextProvider.Provider
      value={
        {
          model,
          OpenModel,
          CloseModel,
          Register,
          Login,
          logout,
          Create,
          post,
          currentuser,
        }}>
      {props.children}
    </ContextProvider.Provider>
  )
}
export default Context