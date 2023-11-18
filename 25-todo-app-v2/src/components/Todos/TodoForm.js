import { useRef, useState } from 'react'
import styles from './TodoForm.module.css'
import Button from '../UI/Button'

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
        <Button type='submit' title='Submit'>
          Sumbit
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
