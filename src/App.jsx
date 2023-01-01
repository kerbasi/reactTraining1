import { useState } from 'react'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
