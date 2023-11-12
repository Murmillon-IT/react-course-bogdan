import { useState } from 'react'
import Button from './components/Button'
import Counter from './components/Counter'
import ButtonReset from './components/ButtonReset'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className='App'>
      <div>
        <Counter count={count} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
      </div>
      {count > 0 ? (
        <ButtonReset buttonActive='button-active' onClick={resetCount} />
      ) : (
        <ButtonReset buttonDisable='button-disable' />
      )}
    </div>
  )
}

export default App
