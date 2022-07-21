import React, { useState } from 'react'
import FormButton from './UI/buttons/FormButton'
import FormInput from './UI/inputs/FormInput'

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', description: ''})

  const addPost = (e) => {
    e.preventDefault()
    const newPost =  {...post, id: Date.now()} 
    create(newPost)
    setPost({title: '', description: ''})
    
  }

  
  const isFilled = () => {
    return post.title.length === 0 || post.description.length === 0
  }

  return (
    <form className="create_post">
        <FormInput 
          title='Post title'
          value={post.title}
          onChange={e => {
            setPost({...post, title: e.target.value}) 

          }}
        />
        <FormInput 
          title='Post description' 
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}
        />
        <FormButton disabled={isFilled()} onClick={addPost}>Create post!</FormButton> 
        
      </form>
  )
}

export default PostForm