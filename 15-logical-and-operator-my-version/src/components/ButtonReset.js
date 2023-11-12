function ButtonReset({ onClick, buttonStyle }) {
  return (
    <button className={buttonStyle} onClick={onClick}>
      Reset
    </button>
  )
}

export default ButtonReset
