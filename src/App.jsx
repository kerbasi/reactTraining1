import { useState } from 'react'
import './App.css'
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <Employees />
      <Footer />
    </div>
  )
}

export default App
