import './App.css'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className='App'>
      <PetInfo animal='cat' age='3' /> {/* здесь age = строка */}
      <PetInfo animal='dog' age={5} /> {/* здесь age = число */}
    </div>
  )
}

export default App
