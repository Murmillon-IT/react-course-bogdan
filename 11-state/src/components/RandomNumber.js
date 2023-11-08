import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'

function RandomNumber({ maxNumber }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNumber))

  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNumber))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  )
}

export default RandomNumber
