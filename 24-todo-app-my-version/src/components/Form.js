import { useState, useRef } from 'react'
import styles from './Form.module.css'
import Task from './Task'

function Form() {
  const [text, setText] = useState('')
  const [components, setComponents] = useState([])
  const [countDoneComponents, setCountDoneComponents] = useState(0)
  const inputRef = useRef()

  const changeNumberComponents = {
    plus: () => setCountDoneComponents((prevCount) => prevCount + 1),
    minus: () => setCountDoneComponents((prevCount) => prevCount - 1),
  }

  //? Функция создания компонента при клике на кнопку Submit
  function creacteComponent() {
    // Проверка не пустой ли текст
    if (text !== '') {
      setComponents((prevComponents) => [
        ...prevComponents,
        <Task
          text={text}
          changeNumberComponents={changeNumberComponents}
          key={prevComponents.length}
        />,
      ])
      setText('') //очистка текста после submit
    } else {
      alert('Todo is empty') //если текст пустой
    }
    // Фокусировка на input после нажатия кнопки Submit
    inputRef.current.focus()
  }

  //? Функция удаления всех компонентов при клике на кнопку очистки
  const cleanComponents = () => {
    setComponents([])
    setCountDoneComponents(0)
  }

  //? Функция от перезагрузки страницы
  const handleFormSubmit = (event) => {
    event.preventDefault()
  }
  console.log(components)

  return (
    <div className={styles.form}>
      {/* Заголовок */}
      <h1 className={styles.title}>Todo App</h1>
      <form className={styles.formItem} onSubmit={handleFormSubmit}>
        {/* Ввод текста */}
        <input
          className={styles.enterText}
          type='text'
          placeholder='Enter new todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
          ref={inputRef}
        />
        {/* Кнопка создания задачи (Submit) */}
        <button className={styles.buttonSubmit} type='submit' onClick={creacteComponent}>
          Submit
        </button>
        <div className={styles.buttons}>
          {/* Кнопка удаления всех компонентов */}
          <button className={styles.button} onClick={cleanComponents}>
            <svg xmlns='http://www.w3.org/2000/svg' height='2em' viewBox='0 0 512 512'>
              <path d='M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z' />
            </svg>
          </button>
          {/* Кнопка удлаения только тех компонентов которые завершены */}
          <button className={styles.button}>
            <svg xmlns='http://www.w3.org/2000/svg' height='2em' viewBox='0 0 448 512'>
              <path d='M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z' />
            </svg>
          </button>
        </div>
      </form>
      {/* Если задач нет, выводится надпись */}
      {components.length > 0 ? components : <h3 className={styles.titleH3}>Todo list is empty</h3>}

      {countDoneComponents ? (
        <h4 className={styles.titleH4}>You have completed {countDoneComponents} todos!</h4>
      ) : (
        false
      )}
    </div>
  )
}

export default Form
