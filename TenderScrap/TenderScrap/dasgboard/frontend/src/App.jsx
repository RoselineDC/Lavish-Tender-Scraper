import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TenderList from './TenderList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TenderList />
    </>
  )
}

export default App
