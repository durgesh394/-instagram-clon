import React, { useState } from 'react'

const Comments = () => {
    const [comment , setcomment] = useState('');


    const CommentHandler =()=>{

    }


    return (
        <form action="" onSubmit={CommentHandler}>
        <div className='comments'>
            
                <input type="text" placeholder='comment...' className='commentInput'
                
                onChange={(e)=>{setcomment(e.target.value)}}/>
                <input type="submit" value="Publish" className='commentBtn' />
        </div>
            </form>
    )
}

export default Comments