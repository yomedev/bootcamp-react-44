import React from 'react'
import { getPostsForMiddleware } from '../../../services/postsService'

export const MiddlewarePage = () => {

  const handleClick = () => {
    getPostsForMiddleware().then(data => console.log(data))
  }

  return (
    <div>
      <button onClick={handleClick} className='btn btn-primary'>Get posts</button>
    </div>
  )
}
