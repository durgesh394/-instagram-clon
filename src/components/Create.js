import React, { useState } from 'react'
import { useContext } from 'react';
import { ContextProvider } from '../Global/Context';
const Create = () => {


    const { Create , currentuser } = useContext(ContextProvider);
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    
    
    const HandleImage = (e) => {
        e.preventDefault();
        setImage(e.target.files[0]);
    }


    const createFormHandler = (e) => {
        e.preventDefault();
        Create({ title, image });
    }

    
    return (
        <>
        {
            currentuser ?
            <div className='create_Container'>
            <form action="" onSubmit={createFormHandler}>
                <div className="createWrapper">
                    <input type="text" placeholder='What are in your mind...' className='createinput'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                </div><br />

                <div className='createIcon'>
                    <div>
                        <label htmlFor="file">
                            <i className="fa-solid fa-camera"></i>
                        </label>
                        <input type="file" id='file' className='createfile' 
                            onChange={HandleImage}
                            required
                        />
                    </div>
                    <div className="creatSbmitContainer">
                        <input type="submit" value="Create" className='createsubmit' />
                    </div>
                </div>
            </form>
        </div> : null
        }
      </>
    )
}

export default Create
