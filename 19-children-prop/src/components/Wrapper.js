const Wrapper = (props) => {
  
  const style = {
    backgroundColor: props.color,
    width: '250px',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '10px'
  }

  return <div style={style}>{props.children}</div>
}

export default Wrapper
