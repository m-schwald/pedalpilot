import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import { Home, Customers, Deliveries, Riders, Layout, AddRider } from './views'

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
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home data={serverResponse} />} />
        <Route path="customers" element={<Customers />} />
        <Route path="deliveries" element={<Deliveries />} />
        <Route path="riders" element={<Riders />} />
        <Route path="riders/add_rider" element={<AddRider />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
