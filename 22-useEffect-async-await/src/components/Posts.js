import { useEffect, useState } from 'react'
import Post from './Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    //? Варинант №1. Способ IIFE, когда функ-я создается без имени и сразу после, вызывается
    /* ;(async function () {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    })() */ //* вызов функции
    //? Вариант №2. Вызов async с помощью стрелочной функции
    /*     const fetchData = async () => {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData() */
    //? Варинант №3
    async function fetchData() {
      try {
        const res = await fetch(API_URL)
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className='posts'>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1 className='loading'>Loading...</h1>
      ) : (
        posts.map((el) => <Post {...el} key={el.id} />)
      )}
    </div>
  )
}

export default Posts
