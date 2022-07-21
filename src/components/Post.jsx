import React from 'react'

const Post = (props) => {

  return (
    <div className="post">
      <div className="post_content"> 
        <h3 className="post_title">{props.index + 1} {props.post.title}</h3>
        <div className="post_descrip">{props.post.description}</div>
      </div>
      <div className="post_btn">
        <button onClick={() => props.del(props.post)} className='delete_post'>DEL</button>
      </div>
    </div>
  )
}

export default Post