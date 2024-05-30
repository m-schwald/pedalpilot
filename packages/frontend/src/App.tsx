import { useEffect, useState } from 'react'
import './App.css'

const BackendUrl = "http://localhost:3000"

function App() {

  const [serverReturn, setServerReturn] = useState('')

  useEffect(() => {
    fetch(`${BackendUrl}/`)
      .then((res) => res.json())
      .then((data) => setServerReturn(data.message))
  }, [])


  return (
    <>
      <div>
        <h1>Bladeblubb: {serverReturn}</h1>
      </div>
    </>
  )
}

export default App
