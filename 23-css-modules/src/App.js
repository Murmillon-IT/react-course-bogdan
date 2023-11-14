import Info from './components/Info.js'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Info />
      <div className='info'>
        <h1>App component heading</h1>
        <h2>Heading in the Info component</h2>
        <button className='my-button'>App component button</button>
      </div>
    </div>
  )
}

export default App
