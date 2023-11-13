const Post = (props) => {
  return (
    <div className='post'>
      <div className='id'>
        <small className='small_mod'>Post: {props.id}</small>
        <small>User ID: {props.userId}</small>
      </div>
      <p className='post-title'>
        <span>title:</span> {props.title}
      </p>
      <p className='post-body'>
        <span>body:</span> {props.body}
      </p>
    </div>
  )
}

export default Post
