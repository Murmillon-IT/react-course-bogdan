function ButtonReset({ onClick, buttonActive, buttonDisable }) {
  return buttonActive === 'button-active' ? (
    <button className={buttonActive} onClick={onClick}>
      Reset
    </button>
  ) : (
    <button className={buttonDisable} onClick={onClick}>
      Reset
    </button>
  )
}

export default ButtonReset
