import { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Rider } from '../types'
import { Card, Typography, IconButton, Stack } from '@mui/material';
import { BackendUrl } from '../App';
import { LocalPhone, Mail, Add, Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Riders() {
  const [riders, setRiders] = useState<Rider[]>([])
  const navigate = useNavigate()

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

  const deleteRider = async (id: number) => {
    try {
      await axios.delete(`${BackendUrl}/riders/${id}`)
      setRiders(riders.filter(rider => rider.id !== id))
    } catch (error) {
      console.error("Error deleting rider: ", error)
    }
  }

  return (
    <>
        <Typography textAlign="center" variant="h3" sx={{ p:3 }}>
          Hier eine Liste der Fahrenden:
        </Typography>
        <Stack direction="row" sx={{ p:3, flexWrap: "wrap", gap: "30px" }} justifyContent="center">
            {riders.length > 0 && riders.map((rider: any) => (
              <Card key={rider.id} sx={{p:3, width: "20%", position: "relative"}} >
                <Stack direction="row" alignItems="center" justifyContent="center" position="absolute" top={10} right={10}>
                  <IconButton onClick={()=>navigate(`/riders/edit/${rider.id}`)} >
                    <Edit />
                  </IconButton>
                  <IconButton onClick={()=>deleteRider(rider.id)}>
                    <Delete />
                  </IconButton>
                </Stack>
                <Stack className="rider" gap={1}>
                  <Typography variant="h5" textAlign="center" sx={{p: 1}} className='username'>{rider.username}</Typography>
                  <Typography>{rider.firstName} {rider.lastName}</Typography>
                  <Stack alignItems="center" gap={1} direction="row">
                    <LocalPhone fontSize="small" />
                    <a href={`tel:${rider.phoneNumber}`}>{rider.phoneNumber}</a>
                  </Stack>
                  <Stack alignItems="center" gap={1} direction="row">
                    <Mail fontSize="small" />
                    <a href={`mailto:${rider.email}`}>{rider.email}</a>
                  </Stack>
                  <Typography>{rider.notes}</Typography>
                </Stack>
              </Card>
            ))}
            <Card sx={{p:3, width: "20%" }}>
              <IconButton href="/riders/add" sx={{ height: "100%", width: "100%", borderRadius: 0 }} >
                <Stack alignItems="center" justifyContent="center" sx={{ p:3 }}>
                    <Add fontSize='large' />
                </Stack>
              </IconButton>
            </Card>
        </Stack>
    </>
  )
}

export default Riders
