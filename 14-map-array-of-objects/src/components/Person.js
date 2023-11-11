function Person({ firstName, lastName, email, img }) {
  return (
    <div className='Person'>
      <img src={img} alt='no img(' />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  )
}

export default Person
