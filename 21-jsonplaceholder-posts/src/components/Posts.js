import { useEffect, useState } from 'react'
import Post from './Post'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false))
  }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className='posts'>
      <h1>Posts</h1>
      {isLoading ? (
        <h1 className='loading'>Loading...</h1>
      ) : (
        posts.map((el) => <Post {...el} key={el.id} />)
      )}
    </div>
  )
}

export default Posts
