import React, { useContext } from 'react'
import { ContextProvider } from '../Global/Context';
import Comments from './Comments';
const Post = () => {
    const { post , currentuser} = useContext(ContextProvider);
    return (
        <>
            { currentuser ? 
                post.map((posts) => {
  
                        return(
                    <div className='post_container'>

                        <div className="post_Header">
                            <div className='profileAvator'>{posts.name[0]}</div>
                            <div className='post_name'>{posts.name}</div>
                        </div>
                        <div className='post_image'>
                            <img src={posts.image} alt="" className='postimg' />
                        </div>
                        <Comments />
                    </div>
                        )
                })
                
            
    
            : null}
        </>
    )
}

export default Post