import React from 'react'
import BrownButton from './UI/buttons/BrownButton'

const Post = (props) => {

  return (
    <div className="post">
      <div className="post_content"> 
        <h3 className="post_title">{props.index + 1} {props.post.title}</h3>
        <div className="post_descrip">{props.post.description}</div>
      </div>
      <div className="post_btn">
        <BrownButton onClick={() => props.del(props.post)} className='button'>DEL</BrownButton>
      </div>
    </div>
  )
}

export default Post