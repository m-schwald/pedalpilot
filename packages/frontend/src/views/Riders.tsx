import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Rider } from '../types'
import AddIcon from '@mui/icons-material/Add';
import { Card, Typography, IconButton, Stack } from '@mui/material';

const BackendUrl = "http://localhost:3000"

function Riders() {

  const [riders, setRiders] = useState<Rider[]>([])

  useEffect(() => {
    const fetchRiders = async () => {
      try {
        const response = await axios.get(`${BackendUrl}/riders`)
        setRiders(response.data)
      } catch (error) {
        console.error("Error fetching riders: ", error)
      }
    }
    fetchRiders()
  }, [])

  return (
    <>
        <Typography>Hier eine Liste der Fahrenden:</Typography>
        <Stack spacing={2}>
            {riders.length > 0 && riders.map((rider: any) => (
                <Card>
                <li key={rider.id} className="rider">
                <p className='username'>{rider.username}</p>
                <p>{rider.firstName} {rider.lastName}</p>
                <p>{rider.phoneNumber}</p>
                <p>{rider.email}</p>
                <p>{rider.notes}</p>
            </li>
            </Card>
            ))}
            <IconButton href="/riders/add_rider" >
                <AddIcon />    
            </IconButton>
        </Stack>
    </>
  )
}

export default Riders
