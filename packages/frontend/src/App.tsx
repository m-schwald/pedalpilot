import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Header from './components/Header'

const BackendUrl = "http://localhost:3000"

function App() {

  const [serverResponse, setServerResponse] = useState({ message: ""})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BackendUrl}`)
        setServerResponse(response.data)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
    <Header /> 
      <div className="content">
        <h1>Server says: {serverResponse.message}</h1>
      </div>
    </>
  )
}

export default App
