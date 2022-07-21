import React from 'react'
import Post from './Post'
import './PostList.css'

const PostList = ({posts, del}) => {
  return (
    <div>
      <h1 className='posts_header'>Posts List</h1>
      {posts.length !== 0
        ? posts.map((postIt, index) => 
          <Post del={del} post={postIt} key={postIt.id} index={index}/>
        )
        : <h3 className='posts_not_found'>Posts not found</h3>
      }
    </div>
  )
}

export default PostList