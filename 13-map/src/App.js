import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Counter from './components/Counter'

const texts = [
  'Click me',
  'Hit me',
  'jmyak me',
  'Press me',
  'Click again',
  'Fast click',
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <Counter count={count} />
      {texts.map((el, index) => (
        /* Key нужно прописывать при использовании метода map(это правило React, не JS) и он должен быть уникальным, иначе React выдает предупреждение. Key нужен React-у для эффективного обновления элементов в виртуальном и реальном DOM дереве */
        <Button onClick={incrementCount} text={el} key={index} />
      ))}

      {/* В результате получается такой код: */}
      {/* {[
        <Button onClick={incrementCount} text='Click me' key=0 />,
        <Button onClick={incrementCount} text='Hit me' key=1 />,
        <Button onClick={incrementCount} text='jmyak me' key=2 />,
        <Button onClick={incrementCount} text='Press me' key=3 />,
        <Button onClick={incrementCount} text='Click again' key=4 />,
        <Button onClick={incrementCount} text='Fast click' key=5 />,
      ]} */}
    </div>
  )
}

export default App
