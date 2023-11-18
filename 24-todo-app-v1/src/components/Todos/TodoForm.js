import { useRef, useState } from 'react'
import styles from './TodoForm.module.css'

function TodoForm({ addTodo }) {
  const [text, setText] = useState('')
  const inputRef = useRef()

  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText('')
    inputRef.current.focus()
  }

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder='Enter new todo'
          value={text}
          ref={inputRef}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Sumbit</button>
      </form>
    </div>
  )
}

export default TodoForm
