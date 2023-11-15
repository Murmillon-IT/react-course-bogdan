import { useState } from 'react'
import styles from './Task.module.css'

function Task({ text }) {
  const [deleteComponent, setDeleteComponent] = useState(true)
  const [doneComponent, setDoneComponent] = useState(false)

  return (
    <>
      {deleteComponent && (
        <div className={doneComponent ? styles.taskDone : styles.task}>
          {/* Иконка */}
          <svg
            className={doneComponent ? styles.iconDone : styles.icon}
            xmlns='http://www.w3.org/2000/svg'
            height='2em'
            viewBox='0 0 384 512'
          >
            <path d='M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z' />
          </svg>
          {/* Текст пользователя(задача) */}
          <h2 className={doneComponent ? styles.titleDone : styles.title}>{text}</h2>
          {/* Кнопка удаления задачи */}
          <button
            className={doneComponent ? styles.buttonDone : styles.button}
            onClick={() => setDeleteComponent(false)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' height='2em' viewBox='0 0 448 512'>
              <path d='M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
            </svg>
          </button>
          {/* Кнопка пометки, что задача выполнена */}
          <button
            className={doneComponent ? styles.buttonDone : styles.button}
            onClick={() => setDoneComponent(!doneComponent)}
          >
            <svg xmlns='http://www.w3.org/2000/svg' height='2em' viewBox='0 0 448 512'>
              <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default Task
