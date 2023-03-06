import React from 'react'
import { useDispatch } from 'react-redux'
import { getPostsThunk } from '../../../redux/store'

export const MiddlewarePage = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(getPostsThunk())
  }

  return (
    <div>
      <button onClick={handleClick} className='btn btn-primary'>Get posts</button>
    </div>
  )
}
