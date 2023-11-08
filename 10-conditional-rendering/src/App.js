import './App.css'
import PetInfo from './components/PetInfo'
import PetInfo2 from './components/PetInfo2'

function App() {
  return (
    <div className='App'>
      <PetInfo animal='cat' age='3' hasPet={true} /> {/* здесь age = строка */}
      <PetInfo animal='dog' age={5} hasPet={true} /> {/* здесь age = число */}
      <PetInfo animal='bird' age={2} hasPet={false} />
      {/* сокращенная запись hasPet тоже самое что и hasPet = {true} */}
      <PetInfo animal='bird' age={2} hasPet />
      {/* PetInfo2 аналоговая реализация */}
      <PetInfo2 animal='fish' age={3} hasPet />
    </div>
  )
}

export default App
