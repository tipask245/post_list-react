import React, { useState, useMemo } from "react";
import '../styles/App.css'
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
  
function Posts() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'aaaPPPPOOOOST', description: 'mmmmbbmmmbbbbababab'},
    {id: 2, title: 'bbbbbPOst', description: 'ddgddddddddddddddsgsgsg'},
    {id: 3, title: 'ccccccPOST', description: 'srsrsrssssssssrrrsrsr'},
    {id: 4, title: 'neweqeqweq psdasost', description: 'ssssssdadnnnnnnng'}
  ])

  const [filter, setFilter] = useState({sort: '', search: ''})

  const sortedPosts = useMemo(() => {
    console.log('getSortedPosts')
    if (filter.sort) {
      return filter.sort === 'id' ? [...posts].sort((a,b) => a[filter.sort] - b[filter.sort]) :[...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSeached = useMemo(() => {
    return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.search))
  }, [filter.search, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  // const sortPosts = (mode) => {
    // mode === 'id' 
    // ? setPosts([...posts].sort((a,b) => a[mode] - b[mode])) 
    // : setPosts([...posts].sort((a, b) => a[mode].localeCompare(b[mode])))
  //   setSortSelect(mode)
  // }

  return (
    <div className="Posts">
      <PostForm create={createPost}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList del={deletePost} posts={sortedAndSeached}/>
    </div>
  );
}

export default Posts;