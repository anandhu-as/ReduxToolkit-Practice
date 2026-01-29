import React from 'react'
import PostsList from './redux/features/Posts/PostsList'
import AddPosts from './redux/features/Posts/AddPosts'

const App = () => {
  return (
    <div>
      <AddPosts/>
      <PostsList/>
    </div>
  )
}

export default App